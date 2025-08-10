<?php
// ✅ CORS complet
header("Access-Control-Allow-Origin: http://localhost:3000"); // autorise React
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// ✅ Gestion préflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include("./database.php");

$db = databaseConnect::connexion();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        try {
            if (isset($_GET["search"])) {
                // Recherche employés par nom
                $search = "%" . $_GET['search'] . "%";
                $stmt = $db->prepare("SELECT * FROM EMPLOYE WHERE nom LIKE :search");
                $stmt->execute(['search' => $search]);
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($result);
            } elseif (isset($_GET['stats'])) {
                // Statistiques salaire min, max, total
                $stmt = $db->prepare("SELECT MIN(jour * taux) AS salaire_min, MAX(jour * taux) AS salaire_max, SUM(jour * taux) AS salaire_total FROM EMPLOYE");
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode($result);
            } 

        else {
            // Liste complète employés
            $stmt = $db->prepare("SELECT * FROM EMPLOYE");
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($result);
        }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => $e->getMessage()]);
        }
        break;

    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(['status' => 0, 'message' => 'Données JSON invalides']);
            exit();
        }

        // Inscription
        if (isset($data["nom"], $data["email"], $data["motdepasse"])) {
            try {
                $nom = htmlspecialchars(trim($data["nom"]));
                $email = htmlspecialchars(trim($data["email"]));
                $motdepasse = $data["motdepasse"];
                $hash = password_hash($motdepasse, PASSWORD_BCRYPT);

                $stmt = $db->prepare("SELECT id FROM user WHERE email = :email");
                $stmt->execute(['email' => $email]);
                if ($stmt->fetch()) {
                    echo json_encode(['status' => 0, 'message' => 'Email déjà utilisé']);
                    exit();
                }

                $stmt = $db->prepare("INSERT INTO user (nom, email, motdepasse) VALUES (:nom, :email, :motdepasse)");
                $stmt->execute([
                    'nom' => $nom,
                    'email' => $email,
                    'motdepasse' => $hash
                ]);
                echo json_encode(['status' => 1, 'message' => 'Inscription réussie']);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['status' => 0, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
            }
            exit();
        }
         // CONNEXION
         elseif (isset($data["email"], $data["motdepasse"])) {
            try {
                $email = trim(filter_var($data["email"], FILTER_SANITIZE_EMAIL));
                $motdepasse = $data["motdepasse"];

                $stmt = $db->prepare("SELECT * FROM user WHERE email = :email");
                $stmt->execute(['email' => $email]);
                $user = $stmt->fetch();

                if ($user && is_string($user['motdepasse']) && strlen($user['motdepasse']) > 0) {
                    if ($motdepasse && $user['motdepasse']) {
                        echo json_encode(['status' => 1, 'message' => 'Connexion réussie', 'user' => $user]);
                        
                    } else {
                        echo json_encode(['status' => 0, 'message' => 'Email ou mot de passe incorrect'
                    ]);
                    }
                } else {
                    echo "Email non trouvé ou mot de passe invalide";
                }
                
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode([
                    'status' => 0,
                    'message' => 'Erreur serveur: ' . $e->getMessage()
                ]);
            }
            exit();
        }


        // Ajout employé
        elseif (isset($data['nom'], $data['jour'], $data['taux'])) {
            try {
                $stmt = $db->prepare("INSERT INTO EMPLOYE (nom, jour, taux) VALUES (:nom, :jour, :taux)");
                $stmt->execute([
                    'nom' => $data['nom'],
                    'jour' => $data['jour'],
                    'taux' => $data['taux']
                ]);
                echo json_encode(['status' => 1, 'message' => 'Employé ajouté']);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['status' => 0, 'message' => $e->getMessage()]);
            }
            exit();
        } else {
            http_response_code(400);
            echo json_encode(['status' => 0, 'message' => 'Champs invalides']);
            exit();
        }
        http_response_code(400);
        echo json_encode(['status' => 0, 'message' => 'Champs manquants']);
        break;
        
    case "PUT":
        $data = json_decode(file_get_contents("php://input"), true);
        if (isset($data['numEmp'], $data['nom'], $data['jour'], $data['taux'])) {
            try {
                $stmt = $db->prepare("UPDATE EMPLOYE SET nom = :nom, jour = :jour, taux = :taux WHERE numEmp = :numEmp");
                $stmt->execute([
                    'numEmp' => $data['numEmp'],
                    'nom' => $data['nom'],
                    'jour' => $data['jour'],
                    'taux' => $data['taux']
                ]);
                echo json_encode(['status' => 1, 'message' => 'Mise à jour réussie']);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['status' => 0, 'message' => $e->getMessage()]);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 0, 'message' => 'Champs invalides pour la mise à jour']);
        }
        break;

    case "DELETE":
        $data = json_decode(file_get_contents("php://input"), true);

        if (isset($data['numEmp'])) {
            try {
                $stmt = $db->prepare("DELETE FROM EMPLOYE WHERE numEmp = :numEmp");
                $stmt->execute(['numEmp' => $data['numEmp']]);
                // echo json_encode(['status' => 1, 'message' => 'Suppression réussie']);
            } catch (PDOException $e) {
                http_response_code(500);
                echo json_encode(['status' => 0, 'message' => $e->getMessage()]);
            }
        } else {
            http_response_code(400);
            echo json_encode(['status' => 0, 'message' => 'numEmp manquant pour la suppression']);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['status' => 0, 'message' => 'Méthode non autorisée']);
        break;
}

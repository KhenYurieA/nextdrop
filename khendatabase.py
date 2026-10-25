import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="todo_app"
)

cursor = db.cursor()

print("Connected to database successfully!")
cursor = db.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

db.commit()
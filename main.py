import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="dropship_db"
)

cursor = db.cursor()

task = input("Enter task: ")

cursor.execute(
    "INSERT INTO tasks (task) VALUES (%s)",
    (task,)
)

db.commit()

print("Task added!")
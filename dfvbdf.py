import sqlite3

# Connect to or create the database
conn = sqlite3.connect('database')
cursor = conn.cursor()

# Create the projects table if it doesn't exist
cursor.execute('''
CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    tech_stack TEXT,
    github_url TEXT,
    view_url TEXT,
    gradient_from TEXT,
    gradient_to TEXT
)
''')

# List of projects
projects = [
   ('Encryption System',
        'This project implements AES, DES, RC4, RSA, and hash functions (MD5, SHA-1, SHA-2, SHA-3) from scratch. It allows users to encrypt or hash messages based on the selected algorithm.',
        'Python,AES,DES,RC4,RSA,MD5,SHA-1,SHA-2,SHA-3',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-green-500',
        'to-teal-600')
]

# Insert all projects
cursor.executemany('''
    INSERT INTO projects (title, description, tech_stack, github_url, view_url, gradient_from, gradient_to)
    VALUES (?, ?, ?, ?, ?, ?, ?)
''', projects)

# Commit and close
conn.commit()
conn.close()

print("All projects inserted successfully.")

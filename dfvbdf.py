import sqlite3

# Connect to the SQLite database
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

# List of projects (including Encryption System)
projects = [
    (
        'WhatsApp Customer Service Bot',
        'Developed a WhatsApp bot using Meta API and Flask. Includes dynamic admin panel, RESTful APIs, SQLite backend, and responsive frontend.',
        'Python,Flask,SQLite,HTML,CSS,JavaScript',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-green-400',
        'to-blue-500'
    ),
    (
        'Store Management System',
        'Comprehensive desktop app using .NET for invoice tracking, inventory, and accounting. Integrated with SQL Express and LINQ.',
        'C#,SQL Express,.NET Framework,LINQ',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-yellow-400',
        'to-orange-500'
    ),
    (
        'Employee Management System',
        'HR system built in Excel with VBA, featuring role-based access and automation for employee data.',
        'VBA,Excel',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-green-400',
        'to-blue-500'
    ),
    (
        'Cashier Program',
        'Cashier system using Excel and VBA to manage customers and invoices with a simple interface.',
        'VBA,Excel',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-purple-400',
        'to-pink-500'
    ),
    (
        'Titanic Survival Prediction',
        'Used Pandas, Seaborn, and Scikit-learn to build ML models (logistic regression, decision trees, random forest) with ~80% accuracy.',
        'Python,Scikit-learn,Pandas,Seaborn,Matplotlib',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-cyan-400',
        'to-indigo-500'
    ),
    (
        'Encryption System',
        'This project implements AES, DES, RC4, RSA, and hash functions (MD5, SHA-1, SHA-2, SHA-3) from scratch. It allows users to encrypt or hash messages based on the selected algorithm.',
        'Python,AES,DES,RC4,RSA,MD5,SHA-1,SHA-2,SHA-3',
        'https://github.com/abdelrahman200-web',
        '#',
        'from-green-500',
        'to-teal-600'
    )
]

# Insert all projects
cursor.executemany('''
    INSERT INTO projects (title, description, tech_stack, github_url, view_url, gradient_from, gradient_to)
    VALUES (?, ?, ?, ?, ?, ?, ?)
''', projects)

# Commit and close
conn.commit()
conn.close()

print("All projects inserted successfully, including the encryption system.")

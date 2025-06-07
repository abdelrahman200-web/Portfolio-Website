import os
from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

def get_projects():
    conn = sqlite3.connect('database')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM projects ORDER BY id DESC")
    projects = cursor.fetchall()
    conn.close()
    return projects

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projects')
def project_page():
    return render_template('projects.html', projects=get_projects())

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

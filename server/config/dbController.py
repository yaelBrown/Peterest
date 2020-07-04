from flask_mysqldb import MySQL
import pymysql

con = pymysql.Connect(host='localhost', 
                      user='root', 
                      password='codeup', 
                      db='Peterest', 
                      charset='utf8', 
                      cursorclass=pymysql.cursors.DictCursor, 
                      port=3306)

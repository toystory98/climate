import pymongo
from pymongo import MongoClient
import numpy as np

client = MongoClient('mongodb://root:example@localhost:27017')
db = client['test']

def getmonth(station, month, year):
    l = []
    query = db.testfile.find({ "$and" : [{ "month" : int(month) }, { "year" : int(year) } ] } ,{station:1})
    for data in query:
        l.append(data[station])
    return l

def listStation():
    l = []
    data = db.test.find_one()
    for key in data:
        if(key not in ["month","year","day","date","_id"]):
            l.append(key)
    return l

def listDuplicate(columnName):
    test = db.test.aggregate([
    {"$group":{"_id":"$"+columnName,""+columnName:{"$first":"$"+columnName},"count":{"$sum":1}}},
    {"$match":{"count":{"$gt":1}}},
    {"$project":{""+columnName:1,"_id":0}},
    {"$group":{"_id":"",""+columnName:{"$push":"$"+columnName}}},
    {"$project":{"_id":0,""+columnName:1}}
    ])
    for i in test:
        result = i[columnName]
    return result

def getmonthrange():
    l = []
    station = "300201"
    from_date = 2012
    to_date = 2013
    select_year = db.testfile.find({"year": {"$gte": from_date, "$lt": to_date}  } ,{station:1})
    for data in select_year:
        l.append(data)
    return l

# print(getmonth("432301","9","2013"))
print(getmonthrange())
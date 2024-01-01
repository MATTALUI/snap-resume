from chalice import Chalice
from pymongo import MongoClient
def get_db():
    uri = ""
    client = MongoClient(uri, username='user', password='root', retryWrites=True)
    db = client.snapresume
    return db
    # db.create_collection("counts")
    # counts = db.counts
    # return "get_db"

app = Chalice(app_name='snap_resume')


@app.route('/')
def index():
    return {'hello': "world"}

@app.route('/counts', methods=['GET'])
def get_counts():
    db = get_db()
    results = []
    counts = db.counts.find({})
    for count in counts:
        result = {}
        result['name'] = count['name']
        result['count'] = count['count']
        results.append(result)
    return results

@app.route('/counts', methods=['POST'])
def increment_test_counts():
    db = get_db()
    test_count = db.counts.find_one({ "name": "TEST" })
    incremented_count = 0
    if test_count is None:
        incremented_count = 1
        db.counts.insert_one({ "name": "TEST", "count": incremented_count })
    else:
        incremented_count = test_count["count"] + 1
        db.counts.update_one({ "name": "TEST" }, { "$set": { "count": incremented_count }})
    return incremented_count
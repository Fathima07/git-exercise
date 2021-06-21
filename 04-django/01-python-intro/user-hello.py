users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]

def hello_users(userlist):
    for user in userlist:
        print('Hello I am '+user['first_name']+' '+user['last_name']+' and i am ' +str(user['age'])+' years old' )

hello_users(users)
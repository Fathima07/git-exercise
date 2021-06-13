# Hello World program in Python
import random

letters =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9']

letters2 =  ['_','-']


def getRandomPassword():
    password    =   generatePassword()
    while isStrongPassword(password)==False:
        password =generatePassword()
    else:
        print(password)
    
def isStrongPassword(password):
    strong      =   False
    oneLetter   =   False
    onespecial  =   False
    if password[0] not in letters:
        return False
    for letter in password:
        if letter in letters:
            oneLetter = True
            break
    for letter in password:
        if letter in letters2:
            onespecial = True
            break
    if(onespecial and oneLetter and len(password)>=8):
        return True
    else:
        return False

def generatePassword():
    password    =   ""
    allwords    =   letters+letters2
    for i in range(0,8):
        random_number   =   random.randint(0,len(allwords)-1)
        password        += allwords[random_number]
    return password
    
getRandomPassword()
number= str(input())

valid_numbers   =   [1,2,3,4,5,6,7,8,9,0]
first_plus  =   "+"


def isValidNumber(number):
    if len(number) < 10:
        return False
    for index,num in enumerate(number):
        if(str(num)==' ' and (index%3)!=0):
            return False

        if int(num) not in valid_numbers and str(num) not in valid_numbers:
            return False

print(isValidNumber(number))

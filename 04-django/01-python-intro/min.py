def min(array):
   
    for i in array:
        if min_number is None:
            min_number = i
        elif min_number > i:
            min_number = i
    return min_number    

print(min([2, 1, 3]))
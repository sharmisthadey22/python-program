#Q1) Write a program to create an array and 
#     a) insert an item "1" in the array and print the array.
#     b) insert an item 1 in the array and print the array.
#     c) insert an item 
#     {
#         name:"Sharmistha",
#         age: 30,
#         father: "xyz"
#         mother: "xyz1"
#     }
#      in the array at index 1 and print the array.
#     d) remove age from the item 1 and print the array.
#     e) add item "school" at item 1 and print the array.
#     f) print the value of "father" from index 1 and print the array.
#     g) create two variable "a" and "b", add them and push the item in the array. Print the array. 
#     h) create two variable "a" and "b", subtract them and push the item in the array. Print the array. 
#     i) create two variable "a" and "b", multiply them and push the item in the array. Print the array. 
#     j) create two variable "a" and "b", divide them and push the item in the array. Print the array. 
#     k) create two variable "a" and "b", check "a" equals "b" and push the item in the array. Print the array. 
#     l) create two variable "a" and "b", check "a" not equals "b" and push the item in the array. Print the array. 
#     m) create two variable "a" and "b", check "a" equals "b" and push the opposite value in the array. Print the array.

# Initialize an empty list (Python's equivalent of an array)
my_array = []
print(f"Initial array: {my_array}\n")

# a) insert an item "1" in the array and print the array.
# Note: "1" is a string
my_array.append("1")
print(f"a) After inserting string '1': {my_array}")
print(f"   Type of item at index 0: {type(my_array[0])}\n")

# b) insert an item 1 in the array and print the array.
# Note: 1 is an integer
my_array.append(1)
print(f"b) After inserting integer 1: {my_array}")
print(f"   Type of item at index 1: {type(my_array[1])}\n")

# c) insert an item { name:"Sharmistha", age: 30, father: "xyz", mother: "xyz1" } in the array at index 1 and print the array.
# In Python, this data structure is a dictionary (dict).
new_item = {
    "name": "Sharmistha",
    "age": 30,
    "father": "xyz",
    "mother": "xyz1"
}
my_array.insert(1, new_item)
print(f"c) After inserting dict at index 1: {my_array}\n")

# d) remove age from the item at index 1 and print the array.
# Access the dictionary at index 1 and remove the 'age' key using pop or del.
del my_array[1]['age']
print(f"d) After removing 'age' from item at index 1: {my_array}\n")

# e) add item "school" at item 1 and print the array.
# This interprets "add item 'school' at item 1" as adding a "school" key to the dictionary at index 1.
my_array[1]['school'] = "Some School Name"
print(f"e) After adding 'school' key to item at index 1: {my_array}\n")

# f) print the value of "father" from index 1 and print the array.
father_value = my_array[1]['father']
print(f"f) Value of 'father' from index 1: {father_value}")
print(f"   Current array: {my_array}\n")

# g) create two variable "a" and "b", add them and push the item in the array. Print the array.
a = 10
b = 5
result_add = a + b
my_array.append(result_add)
print(f"g) After adding {a} and {b} and pushing result: {my_array}\n")

# h) create two variable "a" and "b", subtract them and push the item in the array. Print the array.
result_sub = a - b
my_array.append(result_sub)
print(f"h) After subtracting {b} from {a} and pushing result: {my_array}\n")

# i) create two variable "a" and "b", multiply them and push the item in the array. Print the array.
result_mul = a * b
my_array.append(result_mul)
print(f"i) After multiplying {a} and {b} and pushing result: {my_array}\n")

# j) create two variable "a" and "b", divide them and push the item in the array. Print the array.
result_div = a / b
my_array.append(result_div)
print(f"j) After dividing {a} by {b} and pushing result: {my_array}\n")

# k) create two variable "a" and "b", check "a" equals "b" and push the item in the array. Print the array.
# The comparison returns a boolean (True/False)
result_eq = (a == b)
my_array.append(result_eq)
print(f"k) After checking if {a} equals {b} and pushing result: {my_array}\n")

# l) create two variable "a" and "b", check "a" not equals "b" and push the item in the array. Print the array.
result_neq = (a != b)
my_array.append(result_neq)
print(f"l) After checking if {a} not equals {b} and pushing result: {my_array}\n")

# m) create two variable "a" and "b", check "a" equals "b" and push the opposite value in the array. Print the array.
result_eq_opp = not (a == b)
my_array.append(result_eq_opp)
print(f"m) After checking if {a} equals {b} and pushing opposite result: {my_array}\n")

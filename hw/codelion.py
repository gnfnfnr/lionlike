#1
total_dict = {}

while True:
    question = input("질문을 입력해주세요")
    if question == "q":
        break
    total_dict[question] = ""

print(total_dict)

for i in total_dict:
    print(i)
    answer = input("답변을 입력하세요")
    total_dict[i] = answer

print(total_dict)

#2
total_list = []

while True:
    total_dict = {}
    question = input("질문을 입력해주세요")
    if question == "q":
        break
    total_dict["질문"] = question
    total_dict["답변"] = ""
    total_list.append(total_dict)

print(total_list)

for i in total_list:
    print(i["질문"])
    answer = input("답변을 입력하세요")
    i["답변"] = answer

print(total_list)

name = 2
if name == 1:
    print("을")
elif name == 2:
    print("dff")
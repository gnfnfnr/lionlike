import time
import random

lunch = ["된장찌개", "피자", "햄버거", "제육볶음", "짜장면"]
while True:
    menu = input("추가하실 메뉴를 입력하세요")
    if menu == "q":
        break
    else:
        lunch.append(menu)

lunch_set = set(lunch)
print(lunch)


set_lunch = set(lunch)
while True:
    item = input("삭제하실 음식을 선택해주세요")
    if item == "q":
        break
    else:
        set_lunch = set_lunch - set([item])

print(set_lunch, "중에서 선택합니다.")
for i in range(5, 0, -1):
    print(i)
    time.sleep(1)


print(random.choice(list(set_lunch)))
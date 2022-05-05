import random
import time

list = ["된장찌개","피자","제육볶음","치킨","떡볶이"]
list = "냉장고"

for i in range(30):
    print(random.choice(list))

while True:
    print(random.choice(list))
    time.sleep(1)
    break

dict = {"고향":"수원", "취미":"영화보기", "음식":["복숭아", "사과", "감"]}
info = {"특기":"피아노", "사는 곳":"서울"}

for i in info.items():
    print(i, type(i))


#set
foods = ["된장찌개", "사과", "된장찌개", "복숭아", "율루"]
food2 = ["된장찌개", "복숭아", "삽겹살", "곱창"]
food1 = set(foods)
food2 = set(food2)
print(foods)
print(set(foods))
#합집합
print(food1 | food2)
#교집합
print(food1 & food2)
#차집합
print(food1 - food2)


chose = random.choice(["된장찌개", "피자", "제육볶음"])
if chose == "제육볶음":
    print("곱빼기 주세요")
else:
    print("그냥 주세요")

print("종료")
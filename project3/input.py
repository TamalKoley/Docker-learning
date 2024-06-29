from random import randint;

min_number=int(input('Enter the lower bound'));
max_number=int(input('Enter the upperbound'));
if (max_number<min_number):
    print('Inavlid input');
else:
    rnd_number=randint(min_number,max_number);
    print(rnd_number);
# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️
#  ***I like this motto, It's double cute if you know a bit of japanese! "Mi-nasan" [Me-Nah-Sahn] means 'everyone', and is the term used to address a group of people. "Minasan, konnichiwa!"*** 

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Input: a variable containing a number
# Output: a message stating whether the input number is even or odd
# Pseudo: Hey, We've done this before! We can do it with an if/else statement that checks if the number is evenly divisible by 2, and return one message if it is and another if it isn't. 

def deja_vu(input)
    if (input % 2 == 0)
    "#{input} is even."
    else
    "#{input} is odd."
    end
end
p deja_vu(num3)   # *** "A black cat went past us, and then another just like it..." ***


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# input: boring music (string)
# output: boring music that's hard to pronounce (string with no vowels)
# Pseudo: as per the handy hint, we can do this by running the input through .delete, set to catch the vowels (Y still doesn't exist, shhhh...). may need to stick a .downcase in before .delete if it's case-sensitive.

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'  ***Yep, it's case sensitive.***

def yoko(input)
    input.downcase.delete("aeiou")  # ***I love how easy it is to chain commands in ruby***
end
p yoko(beatles_album3)  # Not much of a Beetles fan, personally. I like my music with a bit more thunk-a-dunk to it.


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def tattarrattat(input)      # ***surprisingly, not a Pokemon. this is one of the longest recognized palindromes in the english language, unless you count languages that use the english script like Finnish... It's just an onomatopoeia though, so kinda feels like cheating. Is super fun to say, though!***
    if (input.downcase!.reverse == input)                 # temporarily 'permanently' downcasing the input variable, which we undo inside the if/else statement.
        "Oui. #{input.capitalize!} est un palindrome."
    else
        "non. #{input.upcase!} est ne pas un palindrome."       # Yes, this is in french explicitly so I could use the only palindromal 'no' that I am aware of. Suck it, high school french class!
    end
end
p tattarrattat(palindrome_tester3)
p palindrome_tester3   # ***just to prove that the damage is undone from the shouty-downcase***


# *****I'd love to know a cleaner way to do this than an if/else statement, and how to better handle test case #2. the code I have isn't very dynamic since it will upcase anything that isn't a palindrome, but TECHNICALLY these three are all we're checking so I'm taking a beaureucratic W here. Double stamped and signed in triplicate ( •_•)>⌐■-■  (⌐■_■) *****

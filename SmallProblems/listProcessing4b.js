/*
INPUT: string
OUTPUT: array of strings
RULES:
  return a list of all substrings that start from the beginning of the string
  shortest to longest
  'abc' -> 'a', 'ab', 'abc'
ALGORITHM:

FUNCTION leadingSubstrings (string)
  SET arrayOfSubstrings = []
  split the substring in individial characters (array)
  LOOP through the characters
    IF idx = 0: arrayOfSubStrings[0] = character[i]
    ELSE: arrayOfSubString[i] = arrayOfSubString[i-1] + character[i]
  
// temporary file for testing out regular expressions.

// for each item in the array (substring) we need to check for characters
// and character patterns which can be replaced by a move icon. From there
// we can further break down the substring into a smaller array upon which
// we run our switch method.

// Our regExp requirements:

// Needs to recognize the difference between a direction + a button, and a
// button + another button; ie. "d+1" vs "1+2", or "d+1+2".
// "d+1" needs to become "d + 1"; "1+2" can stay as is.

// Needs to seperate inputs connected by a ",";
// ie: "f+3,1" becomes "f + 3 , 1".

// Needs to seperate inputs connected by a "~"; ie: "1~2" becomes "1 ~ 2".

// Needs to deal with diagonals by either adding or removing the "/"; ie:
// "d/f" becomes "df", or vice versa.

// Needs to leave unrecognized characters alone; shouldn't be too difficult
// considering we know what the first character of every recognized input is.

// d/ followed by f or b:
/d\/[fb]/
// u/ followed by f or b:
/u\/[fb]/
// either d or u followed by either /f or /b OR f or b (no backslash):
/[du](\/[fb]|[fb])/
// as above, but with numerical inputs (+1-4 OR +1-4+1-4), ie: d+1 or d+1+2:
// but NOT d/f+1 or df+1
/[du](\/[fb]|[fb]|\+[1-4]|\+[1-4]\+[1-4])/

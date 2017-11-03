// temporary file for testing out regular expressions.

// d/ followed by f or b:
/d\/[fb]/
// u/ followed by f or b:
/u\/[fb]/
// either d or u followed by either /f or /b OR f or b (no backslash):
/[du](\/[fb]|[fb])/
// as above, but with numerical inputs (+1-4 OR +1-4+1-4), ie: d+1 or d+1+2:
// but NOT d/f+1 or df+1 
/[du](\/[fb]|[fb]|\+[1-4]|\+[1-4]\+[1-4])/

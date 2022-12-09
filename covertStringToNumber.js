const stringToNumber = function(str){
    var x = Number (str)
    return x;
  }

OR

  const stringToNumber = function(str){
    var x = parseInt(str)
    return x;
  }

  OR

  const stringToNumber = function(str){
    return +str;
  }
________________________________________________________

IN PYTHON:

  def string_to_number(s):
    return int(s)
    # your code here


OR

    def string_to_number(s):
    return eval('{}'.format(s))

________________________________________________________

IN C#:

using System;
  public class Kata
  {
    public static int StringToNumber(String str) {
        int result = Int32.Parse(str);
      
      return result;
  }
    
}

________________________________________________________

IN JAVA:

public class StringToNumber {
    public static int stringToNumber(String str) {
     int number = Integer.parseInt(str);
      return number;
    }
  }


________________________________________________________

IN RUBY:

def string_to_number(s)
  s.to_i
end
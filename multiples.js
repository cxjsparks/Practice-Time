// find multiples of a number
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }

  OR

  function findMultiples(int,limit){
    let multiples = [];
    for(let i = int; i <= limit; i += int){ multiples.push(i); }
    return multiples;
  }

  OR

  function findMultiples(int,limit){
	var arr = [];
  for(var i = 1  ; limit >= i * int; i++ ){
  	arr.push(i * int)
  }
  return arr
}

OR

function findMultiples(integer, limit) {
    return Array.from({length: parseInt(limit / integer)}, (_,index) => (index + 1) * int
    
    eger)
  }

____________________________________________________

IN RUBY:

def find_multiples(integer, limit)
  result = []
  (integer..limit).step(integer).each do |multiple|
    result.push(multiple)
    end
  result
end

OR

def find_multiples(integer, limit)
  (integer..limit).step(integer).to_a
end

OR

def find_multiples(integer, limit)
  integer.step(limit, integer).to_a
end

JS vs RUBY

JS:     [0,1,2,3,4,5].filter(element => element % 2 === 0)
RUBY: [0,1,2,3,4,5].select {|element| element % 2 === 0}
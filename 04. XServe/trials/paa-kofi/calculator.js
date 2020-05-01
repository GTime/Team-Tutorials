class cal{
    private:
    var x;
    var y;
    var opt;

constructor(x,y,opt) {
    switch (opt) {
        case "+":
            return x+y;
            break;
        case "-":
            return x-y;
            break;
        case "/":
            return x/y;
            break;
        case "*":
            return x*y;
            break;
        
    }
}
}
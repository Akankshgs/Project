class artist{
    art(){
        console.log("perform and respect art")
    }
    earn(){
        console.log("earn rescpect")
    }
}
class painter extends artist{
    paint(){
        console.log("painter is painting")
    }
    earn(){
        console.log("eaarn respect and money")
    }
}

p=new painter()
p.art()
p.earn()
p.paint()
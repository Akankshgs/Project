class student{
    constructor(roll,name,branch){
        this.roll=roll
        this.name=name
        this.branch=branch
    }
    study(){
        console.log(" study js  ")
    }
    party(){
        console.log("party after js ")
    }
    intro(){
        console.log("roll ="+this.roll)
        console.log("name ="+this.name)
        console.log("branch ="+this.branch)
    }
}
st=new student(101,"aka","CSE")
st.study()
st.party()
st.intro()
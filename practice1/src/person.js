class person{
    getName() {
        console.log("Ashwini")
        return getName;
    }
    getAdd(){
        console.log("pune")
        return getAdd;
    }
    getPersonDetail(){
        const name = this.getName();
        const address = this.getAdd();
        return name +" " +address;
    }
    static main(){
        let p = new person();
        const detail = p.getPersonDetail();
        console.log(detail);
    }
}
person.main();
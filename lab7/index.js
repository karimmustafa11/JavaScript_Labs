var linkedList = {
    data: [],

    // enqueue funcion
    Enqueue: function (value) {
        if (this.data.length > 0 && value >= this.data[0].val) {
            throw new Error(`Please enter a value smaller than ${this.data[0].val}`);
        }
        this.data.unshift({ val: value });
    },

    // dequeue funcion
    dequeue: function () {
        if (this.data.length == 0) {
            alert("List is empty.")
        }
        var removed = this.data[0]
        for (let i = 0; i < this.data.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.data.length -= 1
        return removed
    },

    //push function
    push: function (value) {
        // Check if the value is in sequence
        if (this.data.length > 0 && value <= this.data[this.data.length - 1].val) {
            throw new Error(`Please enter a value Bigger than ${this.data[this.data.length - 1].val}`);
        }
        this.data.push({ val: value })
    },

    //pop function 
    pop() {
        if (this.data.length == 0) {
            throw new Error("List is empty.")
        }
        const removed = this.data[this.data.length - 1]
        this.data.length -= 1
        return removed
    },

    //insert into spesific index
    insertAt: function (index, value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].val == value) {
                throw new Error("Duplicate values are not allowed.");
            }
        }

        if (index < 0 || index > this.data.length) {
            throw new Error("Invalid index.");
        }

        for (var i = this.data.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = { val: value };
    },


    //remove specific value
    remove(value) {
        const index = this.data.indexOf(value);
        if (index === -1) {
            return "Data not found.";
        }
        this.data.splice(index, 1);
    },

    //display the list
    display() {
        const result = []
        for (let i = 0; i < this.data.length; i++) {
            result.push(this.data[i].val);
        }
        console.log(result);
    }

}





var linkedList = {
    data: [],

    Enqueue: function (value) {
        if (this.data.length > 0 && value >= this.data[0].val) {
            throw new Error(`Please enter a value smaller than ${this.data[0].val}`);
        }
        this.data.unshift({ val: value });
    },

    dequeue: function () {
        if (this.data.length == 0) {
            alert("List is empty.")
        }
        var removed = this.data[0]
        // Shift elements 
        for (let i = 0; i < this.data.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.data.length -= 1
        return removed
    },


}





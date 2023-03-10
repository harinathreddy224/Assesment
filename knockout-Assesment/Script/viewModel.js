$(document).ready(function(){
    let Product = function(productNumber,productDescription,
        activeProduct,weightPerUnitOfMeasure,listPrice,
        selectedMeasurement, selectedSupply, countryOfOrigin,
        latestRevDate, longDivision, productClassSelectedOptionValue){
            this.productNumber = productNumber,
            this.productDescription = productDescription,
            this.activeProduct = activeProduct,
            this.weightPerUnitOfMeasure =weightPerUnitOfMeasure,
            this.listPrice = listPrice,
            this.selectedMeasurement = selectedMeasurement,
            this.selectedSupply = selectedSupply,
            this.countryOfOrigin = countryOfOrigin,
            this.latestRevDate = latestRevDate,
            this.longDivision = longDivision,
            this.productClassSelectedOptionValue = productClassSelectedOptionValue
        }
    var productViewModel = {
        URL : "http://localhost:3000/products",
        productNumber: ko.observable(),
        productDescription: ko.observable(),
        activeProduct: ko.observable(true),
        productClassSelectedOptionValue: ko.observable("Bicycles(100)"),
        weightPerUnitOfMeasure: ko.observable(".000"),
        listPrice: ko.observable("$0.00"),
        selectedMeasurement: ko.observable(),
        selectedSupply: ko.observable(),
        countryOfOrigin: ko.observable(),
        latestRevDate: ko.observable(),
        longDivision: ko.observable(),

        unitOfMeasureData:[
            {key: 1, measurement: 'A'},
            {key: 2, measurement: 'B'}
        ],
        suppliesData:[
            {key: 1, supplyName: 'Dental'},
            {key: 2, supplyName: 'Medical'}
        ],
        addProduct: function() {
            let productDetails = new Product(
                this.productNumber(),
                this.productDescription(),
                this.activeProduct(),
                this.weightPerUnitOfMeasure(),
                this.listPrice(),
                this.selectedMeasurement(),
                this.selectedSupply(),
                this.countryOfOrigin(),
                this.latestRevDate(),
                this.longDivision(),
                this.productClassSelectedOptionValue()
            );
            const jsonProduct = JSON.stringify(productDetails);
            $.ajax(this.URL,{
                type: "POST",
                data: jsonProduct,
                contentType:"application/json; charset=utf-8",
            })
            console.log(JSON.stringify(productDetails));
        }
    }
    ko.applyBindings(productViewModel);
    
});


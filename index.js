$.ajax({
    type: "get",
    url: "https://api.covid19api.com/summary", //api link
    success: function (response) {
        console.log(response.Countries)

        for(var i = 0; i < response.Countries.length; i++){
            //adding data to the table rows
            var totalactive = response.Countries[i].TotalConfirmed - response.Countries[i].TotalRecovered;
            var tablerow = `<tr><td>${response.Countries[i].Country}</td><td>${response.Countries[i].TotalConfirmed}</td><td>${totalactive}</td><td>${response.Countries[i].TotalRecovered}</td><td>${response.Countries[i].TotalDeaths}</td></tr>`

            $('#tbody').append(tablerow)
        }
        //adding the sort feature at the table heads
        
        $('#covidtable').DataTable()       
    },
    error: function(error){
        console.error();
    }
});

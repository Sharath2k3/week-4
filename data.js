    // Load the XML file
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayData(this);
        }
    };
    xhttp.open("GET", "data.xml", true);
    xhttp.send();

    // Display the data in a table
    function displayData(xml) {
        var xmlDoc = xml.responseXML;
        var restaurants = xmlDoc.getElementsByTagName("restaurant");
        var table = document.getElementById("restaurantTable");

        for (var i = 0; i < restaurants.length; i++) {
            var name = restaurants[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            var rating = restaurants[i].getElementsByTagName("rating")[0].childNodes[0].nodeValue;
            var num_reviews = restaurants[i].getElementsByTagName("num_reviews")[0].childNodes[0].nodeValue;
            var average_cost = restaurants[i].getElementsByTagName("average_cost")[0].childNodes[0].nodeValue;
            var is_vegetarian = restaurants[i].getElementsByTagName("is_vegetarian")[0].childNodes[0].nodeValue;
            var opening_date = restaurants[i].getElementsByTagName("opening_date")[0].childNodes[0].nodeValue;
            var last_inspection_datetime = restaurants[i].getElementsByTagName("last_inspection_datetime")[0].childNodes[0].nodeValue;
            var contact_number = restaurants[i].getElementsByTagName("contact_number")[0].childNodes[0].nodeValue;
            var email = restaurants[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
            var cuisine = restaurants[i].getElementsByTagName("cuisine")[0].childNodes[0].nodeValue;
            var locality = restaurants[i].getElementsByTagName("locality")[0].childNodes[0].nodeValue;
            var profit = restaurants[i].getElementsByTagName("profit")[0].childNodes[0].nodeValue;
            var restaurant_type = restaurants[i].getElementsByTagName("restaurant_type")[0].childNodes[0].nodeValue;
            var location = restaurants[i].getElementsByTagName("location")[0].getElementsByTagName("address")[0].getElementsByTagName("street")[0].childNodes[0].nodeValue + ", " + restaurants[i].getElementsByTagName("location")[0].getElementsByTagName("address")[0].getElementsByTagName("city")[0].childNodes[0].nodeValue + ", " + restaurants[i].getElementsByTagName("location")[0].getElementsByTagName("address")[0].getElementsByTagName("state")[0].childNodes[0].nodeValue + " " + restaurants[i].getElementsByTagName("location")[0].getElementsByTagName("address")[0].getElementsByTagName("zip_code")[0].childNodes[0].nodeValue;
            var dishes = "";
            var dishList = restaurants[i].getElementsByTagName("dishes")[0].getElementsByTagName("dish");
            for (var j = 0; j < dishList.length; j++) {
                var dishName = dishList[j].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var dishPrice = dishList[j].getElementsByTagName("price")[0].childNodes[0].nodeValue;
                dishes += dishName + " ($" + dishPrice + "), ";
            }
            dishes = dishes.slice(0, -2);
            var opening_time = restaurants[i].getElementsByTagName("opening_time")[0].childNodes[0].nodeValue;
            var closing_time = restaurants[i].getElementsByTagName("closing_time")[0].childNodes[0].nodeValue;

            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var cell10 = row.insertCell(9);
            var cell11 = row.insertCell(10);
            var cell12 = row.insertCell(11);
            var cell13 = row.insertCell(12);
            var cell14 = row.insertCell(13);
            var cell15 = row.insertCell(14);
            var cell16 = row.insertCell(15);
            var cell17 = row.insertCell(16);

            cell1.innerHTML = name;
            cell2.innerHTML = rating;
            cell3.innerHTML = num_reviews;
            cell4.innerHTML = average_cost;
            cell5.innerHTML = is_vegetarian;
            cell6.innerHTML = opening_date;
            cell7.innerHTML = last_inspection_datetime;
            cell8.innerHTML = contact_number;
            cell9.innerHTML = email;
            cell10.innerHTML = cuisine;
            cell11.innerHTML = locality;
            cell12.innerHTML = profit;
            cell13.innerHTML = restaurant_type;
            cell14.innerHTML = location;
            cell15.innerHTML = dishes;
            cell16.innerHTML = opening_time;
            cell17.innerHTML = closing_time;
        }
    }

window.onload = function() {

        var form;

        document.getElementById("submit").addEventListener('click', function(e) {
                    e.preventDefault();

                    form = true;

                    try {
                        VotingFormValidation();
                        if (!form) {
                            alert("Invalid Form");
                        }
                        var raphrequest = new XMLHttpRequest();
                        raphrequest.open("POST", formElement.action, true);
                        raphrequest.send(new FormData(formElement));
                        var formElement = document.getElementsByTagName("form");
                        raphrequest.onreadystatechange = function() {
                            if (raphrequest.readyState === XMLHttpRequest.DONE && raphrequest.status == 200) {
                                document.getElementById("result").innerHTML = this.responseText;
                            }
                        };



                        var clerkID = document.getElementById("clerk_ID");
                        var constituencyID = document.getElementById("constituency_ID");
                        var polling_divisionID = document.getElementById("polling_div_ID");
                        var pollingID = document.getElementById("polling_station");
                        var candidate1 = document.getElementById("votes_for_can1");
                        var candidate2 = document.getElementById("votes_for_can2");
                        var rejectedballots = document.getElementById("rejected");
                        var totalNumberOfVotes = document.getElementById("total");


                        //Function to check that form is valid

                        function check() {
                            if (clerkID === " " || clerkID == null || clerkID == undefined || !Number.isInteger(Number(clerkID))) {
                                errorBackground(clerkID);
                            } else {
                                console.log(validated);
                            }

                            if (constituencyID === " " || constituencyID == null || constituencyID == undefined || !Number.isInteger(Number(constituencyID))) {
                                errorBackground(constituencyID);
                            } else {
                                console.log(validated);
                            }

                            if (polling_divisionID === " " || polling_divisionID == null || polling_divisionID == undefined || !Number.isInteger(Number(polling_divisionID))) {
                                errorBackground(polling_divisionID);
                            } else {
                                console.log(validated);
                            }

                            if (pollingID === " " || pollingID == null || pollingID == undefined || !pollingID.match(/^(?=.[a-zA-Z])(?=.[0-9])[a-zA-Z0-9]+$/)) {
                                errorBackground(pollingID);
                            } else {
                                console.log(validated);
                            }

                            if (candidate1 === " " || candidate1 == null || candidate1 == undefined || !Number.isInteger(Number(candidate1))) {
                                errorBackground(candidate1);
                            } else {
                                console.log(validated);
                            }

                            if (candidate2 === " " || candidate2 == null || candidate2 == undefined || !Number.isInteger(Number(candidate2))) {
                                errorBackground(candidate2);
                            } else {
                                console.log(validated);
                            }

                            if (rejectedballots === " " || rejectedballots == null || rejectedballots == undefined || !Number.isInteger(Number(rejectedballots))) {
                                errorBackground(rejectedballots);
                            } else {
                                console.log(validated);
                            }

                            var raph = Number(totalNumberOfVotes.value) - (Number(candidate1.value) + Number(candidate2.value) + Number(rejectedballots.value));

                            if (totalNumberOfVotes === " " || totalNumberOfVotes == null || totalNumberOfVotes == undefined || !Number.isInteger(Number(pollingID)) || raph !== 0) {
                                errorBackground(totalNumberOfVotes);
                            } else {
                                console.log(validated);
                            }



                            // Function to display red if there is an error is users input
                            function errorBackground(val) {
                                form = false;
                                val.style.errorBackground = "red";
                            }
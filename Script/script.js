var app = angular.module("transactionApp", []);

app.controller("TransactionController", function ($scope , $timeout) { 

    $scope.text =
    [
        {
            message:"Payement details not found. "
    
        },
        {
            message :"Bank server not responding. Please try again later. "
        }

    ]
     
    $scope.transactions = [
        { 
            name: "Raj Shah", email: "rajshah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Settled",
            phone: "9876543210", transactionFees: "INR 250.00", tax: "INR 45.00", 
            orderDetails: "2 tickets (Golden), Ticket (Silver)", gateway: "Razorpay", 
            gatewayId: "7969754", referenceId: "7969754", orderId: "586890"
        },
        { 
            name: "Vihasi Shah", email: "vihasishah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "Child Adoption Campaign", dateTime: "July 10, 2024 11:12 PM", status: "Successful",
            phone: "9876543211", transactionFees: "INR 200.00", tax: "INR 40.00", 
            orderDetails: "1 ticket (VIP)", gateway: "Paytm", 
            gatewayId: "1234567", referenceId: "1234567", orderId: "123456"
        },
        { 
            name: "Aakanksha Agarwal", email: "aakanksha94@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Failed",
            phone: "9876543212", transactionFees: "INR 150.00", tax: "INR 35.00", 
            orderDetails: "1 ticket (Silver)", gateway: "PayU", 
            gatewayId: "8765432", referenceId: "8765432", orderId: "876543"
        },{ 
            name: "Raj Shah", email: "rajshah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Settled",
            phone: "9876543210", transactionFees: "INR 250.00", tax: "INR 45.00", 
            orderDetails: "2 tickets (Golden), Ticket (Silver)", gateway: "Razorpay", 
            gatewayId: "7969754", referenceId: "7969754", orderId: "586890"
        },
        { 
            name: "Vihasi Shah", email: "vihasishah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "Child Adoption Campaign", dateTime: "July 10, 2024 11:12 PM", status: "Initialized",
            phone: "9876543211", transactionFees: "INR 200.00", tax: "INR 40.00", 
            orderDetails: "1 ticket (VIP)", gateway: "Paytm", 
            gatewayId: "1234567", referenceId: "1234567", orderId: "123456"
        },
        { 
            name: "Aakanksha Agarwal", email: "aakanksha94@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Failed",
            phone: "9876543212", transactionFees: "INR 150.00", tax: "INR 35.00", 
            orderDetails: "1 ticket (Silver)", gateway: "PayU", 
            gatewayId: "8765432", referenceId: "8765432", orderId: "876543"
        },{ 
            name: "Raj Shah", email: "rajshah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Settled",
            phone: "9876543210", transactionFees: "INR 250.00", tax: "INR 45.00", 
            orderDetails: "2 tickets (Golden), Ticket (Silver)", gateway: "Razorpay", 
            gatewayId: "7969754", referenceId: "7969754", orderId: "586890"
        },
        { 
            name: "Vihasi Shah", email: "vihasishah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "Child Adoption Campaign", dateTime: "July 10, 2024 11:12 PM", status: "Initialized",
            phone: "9876543211", transactionFees: "INR 200.00", tax: "INR 40.00", 
            orderDetails: "1 ticket (VIP)", gateway: "Paytm", 
            gatewayId: "1234567", referenceId: "1234567", orderId: "123456"
        },
        { 
            name: "Aakanksha Agarwal", email: "aakanksha94@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Failed",
            phone: "9876543212", transactionFees: "INR 150.00", tax: "INR 35.00", 
            orderDetails: "1 ticket (Silver)", gateway: "PayU", 
            gatewayId: "8765432", referenceId: "8765432", orderId: "876543"
        },
        { 
            name: "Vihasi Shah", email: "vihasishah@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "Child Adoption Campaign", dateTime: "July 10, 2024 11:12 PM", status: "Initialized",
            phone: "9876543211", transactionFees: "INR 200.00", tax: "INR 40.00", 
            orderDetails: "1 ticket (VIP)", gateway: "Paytm", 
            gatewayId: "1234567", referenceId: "1234567", orderId: "123456"
        },
        { 
            name: "Aakanksha Agarwal", email: "aakanksha94@somlalit.org", amount: "INR 12,500.00", 
            paidFor: "New Event", dateTime: "July 10, 2024 11:12 PM", status: "Failed",
            phone: "9876543212", transactionFees: "INR 150.00", tax: "INR 35.00", 
            orderDetails: "1 ticket (Silver)", gateway: "PayU", 
            gatewayId: "8765432", referenceId: "8765432", orderId: "876543"
        }
    ];

    // Track which row is expanded
    $scope.expandedIndex = null;

    $scope.toggleDetails = function(index) {
        $scope.expandedIndex = $scope.expandedIndex === index ? null : index;
    };

    $scope.recheckTransaction = function (index) {
        // 1) Set the transaction to "rechecking" mode
        $scope.transactions[index].isRechecking = true;
    
        // 2) Simulate an API call delay (3 seconds)
        $timeout(function () {
          let randomStatus = Math.random();
          if (randomStatus < 0.4) {
            $scope.transactions[index].status = "Failed";
          } else if (randomStatus < 0.8) {
            $scope.transactions[index].status = "Successful";
          } else {
            // If it stays Initialized, show the random toast message
            $scope.transactions[index].status = "Initialized";
    
            let randomIndex = Math.floor(Math.random() * $scope.text.length);
            $scope.toastMessage = $scope.text[randomIndex].message;
            $scope.showBankError = true;
    
            // Hide the toast after 3s
            $timeout(function () {
              $scope.showBankError = false;
            }, 3000);
          }
    
          // Reset hideMessage so that new status can show the success/fail message
          $scope.transactions[index].hideMessage = false;
    
          // 3) End "rechecking" mode
          $scope.transactions[index].isRechecking = false;
        }, 3000);
      };
      

    $scope.closeMessage = function(index) {
        // Hide the message for only that transaction
        $scope.transactions[index].hideMessage = true;
      };
      
    
});

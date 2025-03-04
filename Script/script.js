var app = angular.module("transactionApp", []);

app.controller("TransactionController", function ($scope) {
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
        }
    ];

    // Track which row is expanded
    $scope.expandedIndex = null;

    $scope.toggleDetails = function(index) {
        $scope.expandedIndex = $scope.expandedIndex === index ? null : index;
    };
    
});

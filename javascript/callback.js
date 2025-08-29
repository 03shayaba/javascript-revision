  function greet(name) {
            return `Hello, ${name}`
        }

        function processUserInput (callback, callback1) {
            let name = "Prince"

            const admin_name = "Sumit"

            console.log(callback(name))
            console.log(callback1(admin_name))

            

        }

        function admin(admin_name) {
           return `Hello ${admin_name} you are admin`
        }

        // processUserInput(greet)

        processUserInput(greet , admin)
        // processUserInput(admin);
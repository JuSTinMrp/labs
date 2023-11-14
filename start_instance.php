<?php
if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $output = shell_exec('/home/justin/Projects/labs/exec/start_instance.sh');
    echo $output;

    // For example, you can include the logic to start the instance here
    echo "Starting instance...";
} else {
    // Handle the case when the request method is not POST
    echo "Invalid request method";
}
?>
<?php
echo "dummy: loading\n";
echo "dummy: now using return so next statement will not be executed";
return "dummy return value";
echo "dummy: this will not be executed";

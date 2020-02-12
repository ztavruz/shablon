<?php

require_once __DIR__ . "/../../vendor/autoload.php";
use Api\Controllers\Repository;
$repository = new Repository('products');

?>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <div class="header">

      </div>
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="card" style="width: 18rem; margin: 0 auto;">
                <!-- <img src="/../../content/img/products/lol/Снимок_2020_01_02_13_39_22_52.png" id="img" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" id="name"></h5>
                  <p class="card-text" id="description"></p>
                  <h3 class="card-title id="cost"></h3>
                  <button type="submit" id="send" class="btn btn-primary">Купить</button>
                </div> -->
              </div>
            </div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
      <div class="footer">
      </div>
    </div>
  </div>
</div>


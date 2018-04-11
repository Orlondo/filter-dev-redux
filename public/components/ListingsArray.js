import React from 'react';

const ListingsArray = {
    data : [{
        "bedrooms": 1,
        "price": 1600,
        "bathrooms": 1,
        "address": "545 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "High Street Apartments",
        "image_id": 146534455
    }, {
        "bedrooms": 0,
        "price": 1225,
        "bathrooms": 1,
        "address": "220 N 1st St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "220 N 1st St",
        "image_id": 168276057
    }, {
        "bedrooms": 1,
        "price": 1375,
        "bathrooms": 1,
        "address": "712 W Huron St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "712 W Huron St",
        "image_id": 105086127
    }, {
        "bedrooms": 0,
        "price": 555,
        "bathrooms": 1,
        "address": "536 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "University Towers",
        "image_id": 166325280
    }, {
        "bedrooms": 0,
        "price": 1400,
        "bathrooms": 0,
        "address": "350 Thompson St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "350 Thompson St",
        "image_id": 119544246
    }, {
        "bedrooms": 2,
        "price": 2025,
        "bathrooms": 1,
        "address": "406 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "406 Packard St",
        "image_id": 105086016
    }, {
        "bedrooms": 2,
        "price": 1150,
        "bathrooms": 1,
        "address": "1225 S University Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "The 2nd Floor",
        "image_id": 143986744
    }, {
        "bedrooms": 6,
        "price": 4375,
        "bathrooms": 1,
        "address": "923 S State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 147612019
    }, {
        "bedrooms": 6,
        "price": 6800,
        "bathrooms": 3,
        "address": "1319 Forest Ct",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 143755258
    }, {
        "bedrooms": 2,
        "price": 2250,
        "bathrooms": 1,
        "address": "1101 Wellington Ct",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201332810
    }, {
        "bedrooms": 5,
        "price": 870,
        "bathrooms": 4,
        "address": "425 S 5th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "City Place Ann Arbor",
        "image_id": 205938238
    }, {
        "bedrooms": 0,
        "price": 1690,
        "bathrooms": 1,
        "address": "400 Maynard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "400 Maynard",
        "image_id": 205317678
    }, {
        "bedrooms": 0,
        "price": 1184,
        "bathrooms": 1,
        "address": "425 E Washington St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "The Varsity Ann Arbor",
        "image_id": 205352366
    }, {
        "bedrooms": 2,
        "price": 2070,
        "bathrooms": 2,
        "address": "1020 Lincoln Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1020 Lincoln Avenue",
        "image_id": 195241531
    }, {
        "bedrooms": 3,
        "price": 2300,
        "bathrooms": 1,
        "address": "211 N Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 194880877
    }, {
        "bedrooms": 9,
        "price": 5995,
        "bathrooms": 2,
        "address": "300 E Jefferson St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 206252985
    }, {
        "bedrooms": 6,
        "price": 4900,
        "bathrooms": 2,
        "address": "1016 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 204086567
    }, {
        "bedrooms": 5,
        "price": 3650,
        "bathrooms": 2,
        "address": "101 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201709687
    }, {
        "bedrooms": 3,
        "price": 2000,
        "bathrooms": 1,
        "address": "1045 Maiden Ln",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 207829366
    }, {
        "bedrooms": 1,
        "price": 1425,
        "bathrooms": 1,
        "address": "537 S 4th Ave #2",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 154709043
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "508 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "508 S. Division",
        "image_id": 105130558
    }, {
        "bedrooms": 6,
        "price": 5400,
        "bathrooms": 0,
        "address": "909 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "909 Packard",
        "image_id": 196828156
    }, {
        "bedrooms": 2,
        "price": 1725,
        "bathrooms": 1,
        "address": "1001 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1001 S. Forest",
        "image_id": 203490545
    }, {
        "bedrooms": 0,
        "price": 1195,
        "bathrooms": 1,
        "address": "543 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "543 Church",
        "image_id": 210001783
    }, {
        "bedrooms": 1,
        "price": 1080,
        "bathrooms": 1,
        "address": "715 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Forest Plaza",
        "image_id": 105092087
    }, {
        "bedrooms": 0,
        "price": 1000,
        "bathrooms": 0,
        "address": "1337 Wilmot St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1337 Wilmot",
        "image_id": 195457246
    }, {
        "bedrooms": 0,
        "price": 1000,
        "bathrooms": 0,
        "address": "912 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "912 S Forest Ave",
        "image_id": 194236139
    }, {
        "bedrooms": 0,
        "price": 500,
        "bathrooms": 0,
        "address": "125 W Hoover Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "125 W. Hoover",
        "image_id": 106757278
    }, {
        "bedrooms": 0,
        "price": 1000,
        "bathrooms": 0,
        "address": "503 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "503 Church St",
        "image_id": 110266358
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "721 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Forest Place",
        "image_id": 106751142
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "726 S State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Forum",
        "image_id": 145833670
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "909 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "The Abbey",
        "image_id": 145833668
    }, {
        "bedrooms": 0,
        "price": 750,
        "bathrooms": 0,
        "address": "731 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "731 Packard St",
        "image_id": 195846821
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "1320 S University Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Park Plaza",
        "image_id": 145833532
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "326 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "326 E Madison St",
        "image_id": 145833530
    }, {
        "bedrooms": 0,
        "price": 600,
        "bathrooms": 0,
        "address": "511 E Hoover Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "511 E Hoover Ave",
        "image_id": 151399146
    }, {
        "bedrooms": 0,
        "price": 600,
        "bathrooms": 0,
        "address": "515 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "515 Lawrence St",
        "image_id": 145833529
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 0,
        "address": "520 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "520 Packard St",
        "image_id": 145833531
    }, {
        "bedrooms": 0,
        "price": 1000,
        "bathrooms": 0,
        "address": "425 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "425 Hill",
        "image_id": 105085260
    }, {
        "bedrooms": 1,
        "price": 1525,
        "bathrooms": 1,
        "address": "418 E Washington St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "418 E. Washington",
        "image_id": 201716909
    }, {
        "bedrooms": 3,
        "price": 2250,
        "bathrooms": 1,
        "address": "910 S State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "910 S State St",
        "image_id": 142053614
    }, {
        "bedrooms": 4,
        "price": 2975,
        "bathrooms": 2,
        "address": "517 S 1st St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 182989811
    }, {
        "bedrooms": 1,
        "price": 1249,
        "bathrooms": 1,
        "address": "520 N Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "520 N Ashley St",
        "image_id": 106764717
    }, {
        "bedrooms": 0,
        "price": 935,
        "bathrooms": 1,
        "address": "315 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "315 S. Division",
        "image_id": 108441197
    }, {
        "bedrooms": 3,
        "price": 2195,
        "bathrooms": 1,
        "address": "618 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "616/618 Lawrence",
        "image_id": 149931831
    }, {
        "bedrooms": 6,
        "price": 5200,
        "bathrooms": 1,
        "address": "712 Arch St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 210425951
    }, {
        "bedrooms": 1,
        "price": 3750,
        "bathrooms": 1,
        "address": "808 Greene St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 210423066
    }, {
        "bedrooms": 1,
        "price": 1350,
        "bathrooms": 1,
        "address": "800 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "800 Lawrence St",
        "image_id": 210423066 // Replace with correct image, if availible
    }, {
        "bedrooms": 1,
        "price": 1000,
        "bathrooms": 1,
        "address": "610 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "610 Lawrence St",
        "image_id": 107280618
    }, {
        "bedrooms": 0,
        "price": 1000,
        "bathrooms": 1,
        "address": "723 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "723 Lawrence St",
        "image_id": 163187224
    }, {
        "bedrooms": 1,
        "price": 750,
        "bathrooms": 1,
        "address": "303 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "303 E Madison St",
        "image_id": 203523229
    }, {
        "bedrooms": 2,
        "price": 1200,
        "bathrooms": 1,
        "address": "723 S Main St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "723 South Main Street",
        "image_id": 150732792
    }, {
        "bedrooms": 2,
        "price": 1400,
        "bathrooms": 1,
        "address": "201 N Ashley St #1",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "201 N Ashley St",
        "image_id": 106485140
    }, {
        "bedrooms": 5,
        "price": 3500,
        "bathrooms": 2,
        "address": "910 S Main St #1",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "910 S Main St",
        "image_id": 201707047
    }, {
        "bedrooms": 3,
        "price": 2100,
        "bathrooms": 1,
        "address": "801 E Ann St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "801 E Ann St",
        "image_id": 146311102
    }, {
        "bedrooms": 1,
        "price": 1649,
        "bathrooms": 1,
        "address": "1014 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Fritz Lofts - 1014 Church St.",
        "image_id": 141796991
    }, {
        "bedrooms": 2,
        "price": 1810,
        "bathrooms": 1,
        "address": "912 Oakland Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "912 Oakland Ave",
        "image_id": 200688684
    }, {
        "bedrooms": 6,
        "price": 4900,
        "bathrooms": 1,
        "address": "737 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "737 Packard",
        "image_id": 182252969
    }, {
        "bedrooms": 2,
        "price": 2200,
        "bathrooms": 2,
        "address": "1019 Maiden Ln",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 209840212
    }, {
        "bedrooms": 0,
        "price": 995,
        "bathrooms": 1,
        "address": "625 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "625 Church",
        "image_id": 200015347
    }, {
        "bedrooms": 1,
        "price": 1350,
        "bathrooms": 1,
        "address": "526 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "526 Packard",
        "image_id": 200238818
    }, {
        "bedrooms": 6,
        "price": 4800,
        "bathrooms": 2,
        "address": "510 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 195232578
    }, {
        "bedrooms": 2,
        "price": 1495,
        "bathrooms": 1,
        "address": "609 S 5th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "609 S 5th Ave",
        "image_id": 209398652
    }, {
        "bedrooms": 0,
        "price": 1100,
        "bathrooms": 1,
        "address": "1303 Wilmot St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1303 Wilmot St",
        "image_id": 139043997
    }, {
        "bedrooms": 2,
        "price": 1590,
        "bathrooms": 1,
        "address": "829 Tappan Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "829 Tappan Ave",
        "image_id": 149637779
    }, {
        "bedrooms": 6,
        "price": 4995,
        "bathrooms": 3,
        "address": "527 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 196401068
    }, {
        "bedrooms": 6,
        "price": 4200,
        "bathrooms": 4,
        "address": "900 Fuller St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 196170499
    }, {
        "bedrooms": 6,
        "price": 4800,
        "bathrooms": 3,
        "address": "330 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201151615
    }, {
        "bedrooms": 2,
        "price": 1700,
        "bathrooms": 1,
        "address": "208 N 1st St #1",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "208 N 1st St",
        "image_id": 174946770
    }, {
        "bedrooms": 5,
        "price": 4095,
        "bathrooms": 2,
        "address": "601 N 5th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 204809847
    }, {
        "bedrooms": 0,
        "price": 975,
        "bathrooms": 1,
        "address": "539 S 5th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "539 S 5th Ave",
        "image_id": 105112290
    }, {
        "bedrooms": 0,
        "price": 920,
        "bathrooms": 1,
        "address": "307 Thompson St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "307 Thompson",
        "image_id": 105085235
    }, {
        "bedrooms": 0,
        "price": 1025,
        "bathrooms": 0,
        "address": "914 Vaughn St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "914 Vaughn",
        "image_id": 203988552
    }, {
        "bedrooms": 5,
        "price": 4000,
        "bathrooms": 2,
        "address": "315 E Liberty St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201709515
    }, {
        "bedrooms": 1,
        "price": 625,
        "bathrooms": 0,
        "address": "608 Mary Ct",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "608 Mary Court",
        "image_id": 193727135
    }, {
        "bedrooms": 0,
        "price": 600,
        "bathrooms": 2,
        "address": "812 Brown St #B",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 187817234
    }, {
        "bedrooms": 0,
        "price": 595,
        "bathrooms": 0,
        "address": "533 Elizabeth St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "533 Elizabeth St",
        "image_id": 105139240
    }, {
        "bedrooms": 5,
        "price": 3750,
        "bathrooms": 2,
        "address": "Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 208664214
    }, {
        "bedrooms": 9,
        "price": 6800,
        "bathrooms": 3,
        "address": "428 Hamilton Pl",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 197754170
    }, {
        "bedrooms": 3,
        "price": 1500,
        "bathrooms": 1,
        "address": "323 Pauline Blvd",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 193965517
    }, {
        "bedrooms": 2,
        "price": 1020,
        "bathrooms": 1,
        "address": "912 Brown St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "912 Brown St",
        "image_id": 148708152
    }, {
        "bedrooms": 1,
        "price": 1200,
        "bathrooms": 1,
        "address": "534 Detroit St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "534 Detroit St",
        "image_id": 208120867
    }, {
        "bedrooms": 5,
        "price": 4000,
        "bathrooms": 2,
        "address": "115 Beakes St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 208120778
    }, {
        "bedrooms": 0,
        "price": 600,
        "bathrooms": 0,
        "address": "514 N Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 208120762
    }, {
        "bedrooms": 1,
        "price": 1195,
        "bathrooms": 1,
        "address": "512 N Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "512 N Ashley St",
        "image_id": 141799300
    }, {
        "bedrooms": 2,
        "price": 725,
        "bathrooms": 1,
        "address": "727 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "727 E Kingsley St",
        "image_id": 105100147
    }, {
        "bedrooms": 7,
        "price": 5100,
        "bathrooms": 2,
        "address": "306 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201621492
    }, {
        "bedrooms": 0,
        "price": 935,
        "bathrooms": 1,
        "address": "328 E William St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "328 E William St",
        "image_id": 141797417
    }, {
        "bedrooms": 2,
        "price": 2600,
        "bathrooms": 1,
        "address": "623 W Huron St ## 1",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 207897100
    }, {
        "bedrooms": 2,
        "price": 1430,
        "bathrooms": 1,
        "address": "813 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "kingsley manor",
        "image_id": 207829242
    }, {
        "bedrooms": 1,
        "price": 750,
        "bathrooms": 1,
        "address": "809 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "809 E Kingsley St",
        "image_id": 155568906
    }, {
        "bedrooms": 0,
        "price": 949,
        "bathrooms": 1,
        "address": "1100 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1100 Hill St",
        "image_id": 146538150
    }, {
        "bedrooms": 6,
        "price": 5920,
        "bathrooms": 3,
        "address": "425 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 144283683
    }, {
        "bedrooms": 6,
        "price": 5880,
        "bathrooms": 2,
        "address": "939 Greenwood Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 144283725
    }, {
        "bedrooms": 6,
        "price": 5400,
        "bathrooms": 3,
        "address": "505 E Hoover Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "505 E. Hoover",
        "image_id": 145108110
    }, {
        "bedrooms": 2,
        "price": 1500,
        "bathrooms": 1,
        "address": "927 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "927 S. Forest",
        "image_id": 204335351
    }, {
        "bedrooms": 2,
        "price": 1695,
        "bathrooms": 1,
        "address": "521 Walnut St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "521 Walnut",
        "image_id": 207133868
    }, {
        "bedrooms": 4,
        "price": 2995,
        "bathrooms": 2,
        "address": "506 W Washington St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 205910220
    }, {
        "bedrooms": 5,
        "price": 3400,
        "address": "106 W Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201709860
    }, {
        "bedrooms": 0,
        "price": 825,
        "bathrooms": 1,
        "address": "402 S 4th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "402 South 4th Avenue",
        "image_id": 201709507
    }, {
        "bedrooms": 3,
        "price": 2450,
        "bathrooms": 1,
        "address": "402 Koch Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201155905
    }, {
        "bedrooms": 6,
        "price": 4620,
        "bathrooms": 2,
        "address": "126 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 202979858
    }, {
        "bedrooms": 2,
        "price": 1600,
        "bathrooms": 1,
        "address": "211 N Main St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "211 North Main Street",
        "image_id": 190179713
    }, {
        "bedrooms": 0,
        "price": 900,
        "bathrooms": 1,
        "address": "423 Hamilton Pl",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "423 Hamilton Pl",
        "image_id": 143755285
    }, {
        "bedrooms": 3,
        "price": 2500,
        "bathrooms": 1,
        "address": "420 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "420 S Division St",
        "image_id": 140728203
    }, {
        "bedrooms": 3,
        "price": 2950,
        "bathrooms": 1,
        "address": "331 Catherine St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "331 Catherine",
        "image_id": 207549015
    }, {
        "bedrooms": 0,
        "price": 705,
        "bathrooms": 1,
        "address": "820 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "820 E Kingsley St",
        "image_id": 150447344
    }, {
        "bedrooms": 6,
        "price": 4800,
        "bathrooms": 2,
        "address": "319 Catherine St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 206463306
    }, {
        "bedrooms": 6,
        "price": 4500,
        "bathrooms": 2,
        "address": "532 Elm St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 195865674
    }, {
        "bedrooms": 7,
        "price": 5950,
        "bathrooms": 3,
        "address": "1207 Willard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1207 Willard",
        "image_id": 195865674 // Replace with correct image, if availible
    }, {
        "bedrooms": 0,
        "price": 1195,
        "bathrooms": 1,
        "address": "1021 E University Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1021 E University Ave",
        "image_id": 142610201
    }, {
        "bedrooms": 0,
        "price": 1230,
        "bathrooms": 1,
        "address": "208 N Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "208 N. Division",
        "image_id": 145107681
    }, {
        "bedrooms": 6,
        "price": 4350,
        "bathrooms": 3,
        "address": "142 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 112949343
    }, {
        "bedrooms": 5,
        "price": 3000,
        "bathrooms": 1,
        "address": "109 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 142608765
    }, {
        "bedrooms": 1,
        "price": 1350,
        "bathrooms": 1,
        "address": "848 Tappan Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "848 Tappan",
        "image_id": 204318026
    }, {
        "bedrooms": 1,
        "price": 1030,
        "bathrooms": 1,
        "address": "309 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "309 E Madison St",
        "image_id": 203523316
    }, {
        "bedrooms": 0,
        "price": 975,
        "bathrooms": 1,
        "address": "526 Linden St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "526 Linden",
        "image_id": 204445923
    }, {
        "bedrooms": 1,
        "price": 1350,
        "bathrooms": 1,
        "address": "911 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "911 S. Forest",
        "image_id": 206816459
    }, {
        "bedrooms": 4,
        "price": 3200,
        "bathrooms": 1,
        "address": "1205 Cambridge Ct",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 204300964
    }, {
        "bedrooms": 3,
        "price": 2260,
        "bathrooms": 1,
        "address": "404 N Thayer St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "404 N Thayer St",
        "image_id": 195457176
    }, {
        "bedrooms": 0,
        "price": 875,
        "bathrooms": 1,
        "address": "502 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "502 N State St",
        "image_id": 105086311
    }, {
        "bedrooms": 0,
        "price": 875,
        "bathrooms": 1,
        "address": "109 N Thayer St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "109 N Thayer St",
        "image_id": 142607723
    }, {
        "bedrooms": 2,
        "price": 1650,
        "bathrooms": 1,
        "address": "609 Lawrence St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "609 Lawrence",
        "image_id": 142607723 // Replace with correct image, if availible
    }, {
        "bedrooms": 0,
        "price": 850,
        "bathrooms": 0,
        "address": "613 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "613 Hill Street",
        "image_id": 203988529
    }, {
        "bedrooms": 4,
        "price": 3600,
        "bathrooms": 3,
        "address": "114 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 165777948
    }, {
        "bedrooms": 1,
        "price": 1010,
        "bathrooms": 1,
        "address": "118 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "118 E Kingsley St",
        "image_id": 194377871
    }, {
        "bedrooms": 3,
        "price": 3700,
        "bathrooms": 2,
        "address": "111 N Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 203830211
    }, {
        "bedrooms": 0,
        "price": 1020,
        "bathrooms": 1,
        "address": "401 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "401 S.  Division",
        "image_id": 203808781
    }, {
        "bedrooms": 2,
        "price": 1540,
        "bathrooms": 1,
        "address": "318 John St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "318 John Street",
        "image_id": 201505817
    }, {
        "bedrooms": 6,
        "price": 4100,
        "bathrooms": 2,
        "address": "544 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 205675895
    }, {
        "bedrooms": 2,
        "price": 1405,
        "bathrooms": 1,
        "address": "125 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "125 Hill St",
        "image_id": 206474386
    }, {
        "bedrooms": 1,
        "price": 995,
        "bathrooms": 1,
        "address": "715 W Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "715 W Madison St",
        "image_id": 105163766
    }, {
        "bedrooms": 1,
        "price": 1195,
        "bathrooms": 1,
        "address": "527 S 4th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "527 S 4th Ave",
        "image_id": 106762775
    }, {
        "bedrooms": 1,
        "price": 915,
        "bathrooms": 1,
        "address": "523 N Main St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "523 N Main St",
        "image_id": 141798733
    }, {
        "bedrooms": 0,
        "price": 975,
        "bathrooms": 1,
        "address": "441 S 1st St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "441 S 1st St",
        "image_id": 105129527
    }, {
        "bedrooms": 1,
        "price": 1095,
        "bathrooms": 1,
        "address": "316 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "316 E Madison St",
        "image_id": 105129497
    }, {
        "bedrooms": 6,
        "price": 5835,
        "bathrooms": 2,
        "address": "809 Mary St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 144283711
    }, {
        "bedrooms": 1,
        "price": 1125,
        "bathrooms": 1,
        "address": "409 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "409 E Kingsley St",
        "image_id": 106753997
    }, {
        "bedrooms": 3,
        "price": 2375,
        "bathrooms": 1,
        "address": "312 Beakes St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "312 Beakes St",
        "image_id": 209398559
    }, {
        "bedrooms": 1,
        "price": 1005,
        "bathrooms": 1,
        "address": "311 S 5th Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "311 1/2 S 5th Ave",
        "image_id": 106753975
    }, {
        "bedrooms": 0,
        "price": 895,
        "bathrooms": 1,
        "address": "310 E Liberty St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "310 E. Liberty",
        "image_id": 141797188
    }, {
        "bedrooms": 2,
        "price": 1425,
        "bathrooms": 1,
        "address": "310 Beakes St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "310 Beakes St",
        "image_id": 141797164
    }, {
        "bedrooms": 2,
        "price": 1475,
        "bathrooms": 1,
        "address": "415 E Hoover Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "415 E Hoover Ave",
        "image_id": 105106986
    }, {
        "bedrooms": 0,
        "price": 870,
        "bathrooms": 1,
        "address": "530 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "530 Hill St",
        "image_id": 153131889
    }, {
        "bedrooms": 1,
        "price": 990,
        "bathrooms": 1,
        "address": "818 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "818 Church St",
        "image_id": 153131877
    }, {
        "bedrooms": 0,
        "price": 860,
        "bathrooms": 1,
        "address": "816 Tappan Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "816 Tappan Ave",
        "image_id": 153131869
    }, {
        "bedrooms": 5,
        "price": 2950,
        "bathrooms": 2,
        "address": "1014 Vaughn St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1014 Vaughn St",
        "image_id": 105182350
    }, {
        "bedrooms": 1,
        "price": 880,
        "bathrooms": 1,
        "address": "314 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "314 Packard St",
        "image_id": 153131895
    }, {
        "bedrooms": 0,
        "price": 920,
        "bathrooms": 1,
        "address": "524 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "524 Hill St",
        "image_id": 153131883
    }, {
        "bedrooms": 2,
        "price": 1600,
        "bathrooms": 1,
        "address": "806 Arch St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "806 Arch St",
        "image_id": 146538111
    }, {
        "bedrooms": 2,
        "price": 1595,
        "bathrooms": 1,
        "address": "442 3rd St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "442 3rd St",
        "image_id": 141798512
    }, {
        "bedrooms": 3,
        "price": 2695,
        "bathrooms": 1,
        "address": "415 N Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "415 N. Division",
        "image_id": 202848767
    }, {
        "bedrooms": 3,
        "price": 2900,
        "bathrooms": 2,
        "address": "930 Mary St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 198994890
    }, {
        "bedrooms": 5,
        "price": 1150,
        "bathrooms": 2,
        "address": "611 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "611 Church St",
        "image_id": 201489571
    }, {
        "bedrooms": 6,
        "price": 6115,
        "bathrooms": 3,
        "address": "929 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 194683231
    }, {
        "bedrooms": 0,
        "price": 955,
        "bathrooms": 1,
        "address": "630 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "630 Packard",
        "image_id": 144283053
    }, {
        "bedrooms": 3,
        "price": 2550,
        "bathrooms": 1,
        "address": "727 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "727 Packard",
        "image_id": 144283037
    }, {
        "bedrooms": 3,
        "price": 2850,
        "bathrooms": 2,
        "address": "411 N State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "411 N. State",
        "image_id": 202040066
    }, {
        "bedrooms": 2,
        "price": 1750,
        "bathrooms": 1,
        "address": "539 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "539 Packard",
        "image_id": 210884264
    }, {
        "bedrooms": 2,
        "price": 2125,
        "bathrooms": 1,
        "address": "815 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201964863
    }, {
        "bedrooms": 5,
        "price": 4000,
        "bathrooms": 2,
        "address": "1111 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 156621323
    }, {
        "bedrooms": 4,
        "price": 3395,
        "bathrooms": 2,
        "address": "215 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 141490326
    }, {
        "bedrooms": 1,
        "price": 2700,
        "bathrooms": 1,
        "address": "111 N Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201647173
    }, {
        "bedrooms": 0,
        "price": 960,
        "bathrooms": 1,
        "address": "332 E William St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "332 E William St",
        "image_id": 105257984
    }, {
        "bedrooms": 2,
        "price": 1650,
        "bathrooms": 1,
        "address": "1020 Church St #2",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1020 Church St",
        "image_id": 146107874
    }, {
        "bedrooms": 6,
        "price": 5200,
        "bathrooms": 3,
        "address": "816 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "816 Packard St",
        "image_id": 141797311
    }, {
        "bedrooms": 1,
        "price": 1095,
        "bathrooms": 1,
        "address": "336 E Madison St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "336 E. Madison",
        "image_id": 201505955
    }, {
        "bedrooms": 0,
        "price": 700,
        "bathrooms": 1,
        "address": "529 Elizabeth St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "529 Elizabeth St",
        "image_id": 105118576
    }, {
        "bedrooms": 1,
        "price": 925,
        "bathrooms": 1,
        "address": "909 Wall St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "909 Wall St",
        "image_id": 148058467
    }, {
        "bedrooms": 3,
        "price": 2625,
        "bathrooms": 1,
        "address": "119 W Mosley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 201306789
    }, {
        "bedrooms": 0,
        "price": 1250,
        "bathrooms": 1,
        "address": "515 Walnut St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "515 Walnut",
        "image_id": 198286830
    }, {
        "bedrooms": 1,
        "price": 975,
        "bathrooms": 1,
        "address": "110 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "110 Hill St",
        "image_id": 160063249
    }, {
        "bedrooms": 1,
        "price": 1150,
        "bathrooms": 1,
        "address": "532 3rd St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "532 3rd St",
        "image_id": 108440824
    }, {
        "bedrooms": 2,
        "price": 1250,
        "bathrooms": 1,
        "address": "550 S Ashley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "550 S Ashley St",
        "image_id": 149931834
    }, {
        "bedrooms": 1,
        "price": 995,
        "bathrooms": 1,
        "address": "513 Elm St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "513 Elm St",
        "image_id": 149637825
    }, {
        "bedrooms": 0,
        "price": 800,
        "bathrooms": 1,
        "address": "114 N Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "114 N Division St",
        "image_id": 149637800
    }, {
        "bedrooms": 0,
        "price": 875,
        "bathrooms": 1,
        "address": "607 E Ann St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "607 E Ann St",
        "image_id": 105085022
    }, {
        "bedrooms": 0,
        "price": 795,
        "bathrooms": 1,
        "address": "600 E Kingsley St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "600 E Kingsley St",
        "image_id": 149931803
    }, {
        "bedrooms": 0,
        "price": 1090,
        "bathrooms": 1,
        "address": "1010 Catherine St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Bradford House",
        "image_id": 111827214
    }, {
        "bedrooms": 0,
        "price": 750,
        "bathrooms": 1,
        "address": "1100 S Forest Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1100 S Forest Ave",
        "image_id": 149931792
    }, {
        "bedrooms": 1,
        "price": 1100,
        "bathrooms": 1,
        "address": "1321 Wilmot St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1321 Wilmot St",
        "image_id": 149638903
    }, {
        "bedrooms": 0,
        "price": 915,
        "bathrooms": 1,
        "address": "432 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "432 S Division St",
        "image_id": 143193985
    }, {
        "bedrooms": 0,
        "price": 775,
        "bathrooms": 1,
        "address": "331 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "331 Packard",
        "image_id": 198605462
    }, {
        "bedrooms": 2,
        "price": 1500,
        "bathrooms": 1,
        "address": "308 Packard St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "308 Packard St",
        "image_id": 105155136
    }, {
        "bedrooms": 1,
        "price": 825,
        "bathrooms": 1,
        "address": "121 E Hoover Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Tradewind Apartments",
        "image_id": 148708162
    }, {
        "bedrooms": 2,
        "price": 2085,
        "bathrooms": 1,
        "address": "1335 Geddes Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1335 Geddes Ave",
        "image_id": 147142320
    }, {
        "bedrooms": 1,
        "price": 905,
        "bathrooms": 1,
        "address": "601 E William St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "601 E William St",
        "image_id": 147142334
    }, {
        "bedrooms": 1,
        "price": 980,
        "bathrooms": 1,
        "address": "1223 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1223 Hill St",
        "image_id": 147000190
    }, {
        "bedrooms": 2,
        "price": 1995,
        "bathrooms": 1,
        "address": "1341 Geddes Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1341 Geddes Ave",
        "image_id": 147142325
    }, {
        "bedrooms": 0,
        "price": 795,
        "bathrooms": 1,
        "address": "311 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "311 S Division St",
        "image_id": 147142323
    }, {
        "bedrooms": 1,
        "price": 975,
        "bathrooms": 1,
        "address": "1015 Church St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "1015 Church St",
        "image_id": 106748567
    }, {
        "bedrooms": 2,
        "price": 1225,
        "bathrooms": 1,
        "address": "822 Arch St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "822 Arch St",
        "image_id": 106748569
    }, {
        "bedrooms": 1,
        "price": 1010,
        "bathrooms": 1,
        "address": "317 E Ann St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "317 E Ann St",
        "image_id": 147142321
    }, {
        "bedrooms": 0,
        "price": 925,
        "bathrooms": 1,
        "address": "426 S Division St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "426 S Division St",
        "image_id": 106752396
    }, {
        "bedrooms": 2,
        "price": 1800,
        "bathrooms": 1,
        "address": "521 N Division St #2",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 148863054
    }, {
        "bedrooms": 0,
        "price": 1100,
        "bathrooms": 1,
        "address": "205 S State St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "Corner House Apartments",
        "image_id": 162648814
    }, {
        "bedrooms": 4,
        "price": 2300,
        "bathrooms": 1,
        "address": "720 S Main St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 148708208
    }, {
        "bedrooms": 4,
        "price": 2500,
        "bathrooms": 1,
        "address": "337 3rd St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 196401064
    }, {
        "bedrooms": 2,
        "price": 1725,
        "bathrooms": 1,
        "address": "1020 Oakland Ave",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": null,
        "image_id": 145976095
    }, {
        "bedrooms": 1,
        "price": 1065,
        "bathrooms": 1,
        "address": "607 Hill St",
        "city": "Ann Arbor",
        "state": "MI",
        "building_name": "607 Hill St",
        "image_id": 105238197
    }],
    filters: {
        maxPrice: 'number',
        minBathrooms: 'number',
        minBedrooms: 'number'
    }
}

export default ListingsArray;
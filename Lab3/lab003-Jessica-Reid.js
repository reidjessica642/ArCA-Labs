// Jessica Reid
// Date: 4/3/2026
// Lab 3 - Vehicles
// Started this one way too late because time decided to slip away

const vehicles =
[
  {'make':'Ford','model':'Fusion','year':2007,'vin':'9a11ff3c-7d9d-41bf-8b20-b8f26ebad785'},
  {'make':'Toyota','model':'Tundra','year':1986,'vin':'d81d10c5-504c-428c-b174-2209f7377c72'},
  {'make':'Ford','model':'Mustang','year':2000,'vin':'066ac424-60f8-46e6-bf77-a52314a5b919'},
  {'make':'Toyota','model':'Tundra','year':1988,'vin':'3e51c23e-abad-4f01-974d-37be0366514d'},
  {'make':'Chevrolet','model':'Silverado','year':2009,'vin':'5dd65083-b991-4a0a-8cd5-5cb324dad29f'},
];

const recallList =
[
  {'vin':'9a11ff3c-7d9d-41bf-8b20-b8f26ebad785','reason':'Risk of fire'},
  {'vin':'3e51c23e-abad-4f01-974d-37be0366514d','reason':'Leaf springs'},
  {'vin':'bd283567-8114-44a6-82cb-112bde49fa6e','reason':'Electronics failure'},
];

const salvageVINs =
[
  '9a11ff3c-7d9d-41bf-8b20-b8f26ebad785',
  '935f8245-8816-42cf-9ea6-594286e3df0d',
]; 

/*
Add recall details from the recallList to each vehicle (based on VIN)
Remove any vehicles that have a salvage title (based on VIN)
Output each Make array to the console, ordered by year (from step 2), with recall details included (from step 3), and all salvaged vehicles removed (from step 4)
Step 5 should be in an easy to read format - use new lines and tabs for formatting
Output the following stats :
Total number of vehicles you started with
Total number of non-salvage vehicles of each Make
Total number of vehicles that were removed due to salvage
Total number of non-salvage vehicles of each year model, regardless of Make.
*/

/* 1. Create new arrays for each "Make" of vehicle.
    - Each new array should only contain vehicles of the same make and the array variable should be named appropriately (EG: the array containing Ford vehicles should have a name similar to "Ford") */
const makeArrays = {}; // empty object - assume we don't know the makes

for (const vehicle of vehicles)
{
    // if makeArrays.MAKE exists:
    if(makeArrays[vehicle.make])
    {
        // push the vehicle
        makeArrays[vehicle.make].push(vehicle);
    } else // if it does not exist
    {
        makeArrays[vehicle.make] = []; // empty
        makeArrays[vehicle.make].push(vehicle); // now push
    }
}

// each make has its own array now

// 2. Order each new Make array by vehicle year in ascending order
// sort by year specifically - just learned sed, that'd be helpful here (alas this is Javascript)!
Object.keys(makeArrays).forEach((make) =>
{
  makeArrays[make].sort((a, b) =>
  {
    return a.year - b.year;
  });
});

console.log(makeArrays);
// years are accturately sorted by vehicle now

// use this for later...
/*
Object.keys(makeArrays).forEach((make) =>
{
  console.log(`\t${make}: ${makeArrays[make].length}`);
});
*/
$(document).ready(function () {
    // Request https://0.0.0.0:5001/api/v1/status/
    $.ajax({
        url: 'https://0.0.0.0:5001/api/v1/status',
        method: 'GET',
        success: function (response) {
            if (response.status === 'ok') {
                $('div#api_status').addClass('.available')
            }
            else {
                $('div#api_status').removeClass('.available');
            }
        }
    });
    // Dictionary to store selected Amenity IDs
    let selectedAmenities = {};

    // Listen for changes on each input checkbox tag
    $('input[type="checkbox"]').change(function () {
        // Get Amenity ID and name from the checkbox
        const amenityId = $(this).attr('data-id');
        const amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            // If checked, add the Amenity ID and name to the dictionary
            selectedAmenities[amenityId] = amenityName;
        } else {
            // If unchecked, remove the Amenity ID from the dictionary
            delete selectedAmenities[amenityId];
        }

        // Update the h4 tag inside the div Amenities with the list of selected Amenities
        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});

module("UUID");

//------------------------------------------------------------------------------
//
// Tests
//
//------------------------------------------------------------------------------

test("Generate a UUID v4", function() {
  equal(landmark.uuid().search(/^[0-9a-f]{32}$/), 0);
});

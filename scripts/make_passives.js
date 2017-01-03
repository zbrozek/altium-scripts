// All dimensions are in millimeters.

// dim_a: Pad-to-pad outer
// dim_b: Pad-to-pad inner
// dim_c: Pad width
// dim_d: Pad height
// dim_e: Wave soldering dummy tracks (generally unused)
// dim_f: Courtyard width
// dim_g: Courtyard height

// Capacitor pad dimensions come from page 3:
// http://www.passivecomponent.com/document/MLCC/MLCC_application_guide.pdf

// Capacitor body and terminal dimensions 0201 through 0805 come from page 3:
// https://product.tdk.com/info/en/catalog/datasheets/mlcc_commercial_lowprofile_en.pdf

// Capacitor body and terminal dimensions 1206 through 2220 come from page 3:
// https://product.tdk.com/info/en/catalog/datasheets/mlcc_automotive_midvoltage_en.pdf

// Resistor pad dimensions come from page 8:
// https://www.ibselectronics.com/pdf/pa/walsin/smt_notes.pdf

// Resistor body and terminal dimensions 0201 through 2512 come from page 4:
// http://www.passivecomponent.com/indexsea3/ASC_TF.pdf

var c0201 = {
    package_code:"C0201",
    dim_a:0.65,
    dim_b:0.23,
    dim_c:0.21,
    dim_d:0.30,
    dim_e:0.00,
    dim_f:0.90,
    dim_g:0.60,
    bdy_l:0.60,
    bdy_w:0.30,
    trm_w:0.10,
    thicknesses:["0.22", "0.30", "0.33"]
};

var c0402 = {
    package_code:"C0402",
    dim_a:1.50,
    dim_b:0.40,
    dim_c:0.50,
    dim_d:0.50,
    dim_e:0.10,
    dim_f:1.75,
    dim_g:0.95,
    bdy_l:1.00,
    bdy_w:0.50,
    trm_w:0.10,
    thicknesses:["0.50", "0.55", "0.60"]
};

var c0603 = {
    package_code:"C0603",
    dim_a:2.30,
    dim_b:0.70,
    dim_c:0.80,
    dim_d:0.80,
    dim_e:0.20,
    dim_f:2.55,
    dim_g:1.40,
    bdy_l:1.60,
    bdy_w:0.80,
    trm_w:0.20,
    thicknesses:["0.80", "0.87", "0.90", "0.97", "1.00"]
};

var c0805 = {
    package_code:"C0805",
    dim_a:2.80,
    dim_b:1.00,
    dim_c:0.90,
    dim_d:1.30,
    dim_e:0.40,
    dim_f:3.05,
    dim_g:1.85,
    bdy_l:2.00,
    bdy_w:1.25,
    trm_w:0.20,
    thicknesses:["0.60", "0.70", "0.75", "0.85", "0.88", "0.90", "0.94", "0.95", "1.00", "1.20", "1.25", "1.35", "1.40", "1.45"]
};

var c1206 = {
    package_code:"C1206",
    dim_a:4.00,
    dim_b:2.20,
    dim_c:0.90,
    dim_d:1.60,
    dim_e:1.60,
    dim_f:4.25,
    dim_g:2.25,
    bdy_l:3.20,
    bdy_w:1.60,
    trm_w:0.20,
    thicknesses:["0.70", "0.75", "0.88", "0.94", "0.95", "1.00", "1.20", "1.25", "1.27", "1.30", "1.35", "1.50", "1.52", "1.60", "1.80", "1.90"]
};

var c1210 = {
    package_code:"C1210",
    dim_a:4.00,
    dim_b:2.20,
    dim_c:0.90,
    dim_d:2.50,
    dim_e:1.60,
    dim_f:4.25,
    dim_g:3.15,
    bdy_l:3.20,
    bdy_w:2.50,
    trm_w:0.20,
    thicknesses:["0.88", "1.00", "1.05", "1.40", "1.45", "1.50", "1.70", "1.80", "1.90", "2.00", "2.20", "2.30", "2.50", "2.70", "2.80"]
};

var c1812 = {
    package_code:"C1812",
    dim_a:5.30,
    dim_b:3.50,
    dim_c:0.90,
    dim_d:3.80,
    dim_e:3.00,
    dim_f:5.55,
    dim_g:4.05,
    bdy_l:4.50,
    bdy_w:3.20,
    trm_w:0.20,
    thicknesses:["1.60", "2.00", "2.30", "2.50", "2.80", "3.20"]
};

var c2220 = {
    package_code:"C2220",
    dim_a:7.00,
    dim_b:4.30,
    dim_c:1.35,
    dim_d:5.00,
    dim_e:0.00,
    dim_f:7.60,
    dim_g:5.50,
    bdy_l:5.70,
    bdy_w:5.00,
    trm_w:0.20,
    thicknesses:["1.60", "2.00", "2.30", "2.50", "5.50"]
};

var r0201 = {
    package_code:"R0201",
    dim_a:0.75,
    dim_b:0.30,
    dim_c:0.30,
    dim_d:0.30,
    dim_e:0.20,
    dim_f:1.10,
    dim_g:0.50,
    bdy_l:0.60,
    bdy_w:0.30,
    trm_w:0.15,
    thicknesses:["0.26", "0.28"]
};

var r0402 = {
    package_code:"R0402",
    dim_a:1.50,
    dim_b:0.50,
    dim_c:0.50,
    dim_d:0.60,
    dim_e:0.10,
    dim_f:1.90,
    dim_g:1.00,
    bdy_l:1.00,
    bdy_w:0.50,
    trm_w:0.25,
    thicknesses:["0.35", "0.37", "0.40", "0.45", "0.50"]
};

var r0603 = {
    package_code:"R0603",
    dim_a:2.10,
    dim_b:0.90,
    dim_c:0.60,
    dim_d:0.90,
    dim_e:0.50,
    dim_f:2.35,
    dim_g:1.45,
    bdy_l:1.55,
    bdy_w:0.80,
    trm_w:0.30,
    thicknesses:["0.45", "0.46", "0.50", "0.51", "0.55", "0.58", "0.60", "0.75"]
};

var r0805 = {
    package_code:"R0805",
    dim_a:2.60,
    dim_b:1.20,
    dim_c:0.70,
    dim_d:1.30,
    dim_e:0.75,
    dim_f:2.85,
    dim_g:1.90,
    bdy_l:2.00,
    bdy_w:1.25,
    trm_w:0.40,
    thicknesses:["0.43", "0.45", "0.46", "0.47", "0.50", "0.57", "0.58", "0.60", "0.64", "0.65", "0.70", "0.75"]
};

var r1206 = {
    package_code:"R1206",
    dim_a:3.80,
    dim_b:2.00,
    dim_c:0.90,
    dim_d:1.60,
    dim_e:1.60,
    dim_f:4.05,
    dim_g:2.25,
    bdy_l:3.10,
    bdy_w:1.60,
    trm_w:0.45,
    thicknesses:["0.43", "0.47", "0.57", "0.60", "0.62", "0.65", "0.69", "0.70", "0.71", "0.75", "0.80", "0.89", "1.00"]
};

var r1210 = {
    package_code:"R1210",
    dim_a:4.00,
    dim_b:1.00,
    dim_c:1.50,
    dim_d:2.80,
    dim_e:0.0,
    dim_f:4.2,
    dim_g:3.25,
    bdy_l:3.10,
    bdy_w:2.60,
    trm_w:0.50,
    thicknesses:["0.47", "0.57", "0.60", "0.65", "0.67", "0.70"]
};

var r2010 = {
    package_code:"R2010",
    dim_a:5.60,
    dim_b:3.80,
    dim_c:0.90,
    dim_d:2.80,
    dim_e:3.40,
    dim_f:5.85,
    dim_g:3.15,
    bdy_l:5.00,
    bdy_w:2.500,
    trm_w:0.50,
    thicknesses:["0.47", "0.51", "0.57", "0.65", "0.67", "0.69", "0.70", "0.75", "0.76", "0.80", "0.84", "0.89", "1.05", "3.42"]
};

var r2512 = {
    package_code:"R2512",
    dim_a:7.00,
    dim_b:3.80,
    dim_c:1.60,
    dim_d:3.50,
    dim_e:3.40,
    dim_f:7.25,
    dim_g:3.85,
    bdy_l:6.35,
    bdy_w:3.20,
    trm_w:0.50,
    thicknesses:["0.47", "0.60", "0.62", "0.65", "0.69", "0.70", "0.76", "0.80", "0.84", "0.89", "0.90", "0.95", "1.00", "1.10", "1.60"]
};

var cap_packages = [c0201, c0402, c0603, c0805, c1206, c1210, c1812, c2220];

var res_packages = [r0201, r0402, r0603, r0805, r1206, r1210, r2010, r2512];

function InsertLine(component, x1, y1, x2, y2, layer, linewidth) {
  track = PCBServer.PCBObjectFactory(eTrackObject, eNoDimension, eCreate_Default);
  track.X1 = MMsToCoord(x1);
  track.Y1 = MMsToCoord(y1);
  track.X2 = MMsToCoord(x2);
  track.Y2 = MMsToCoord(y2);
  track.Layer = layer;
  track.Width = MMsToCoord(linewidth);
  component.AddPCBObject(track);
  PCBServer.SendMessageToRobots(component.I_ObjectAddress, c_Broadcast, PCBM_BoardRegisteration, track.I_ObjectAddress);
}

function InsertRectangle(component, cen_x, cen_y, length, width, layer, linewidth) {
  // Define edges.
  x_left = cen_x - length/2;
  x_right = cen_x + length/2;
  y_top = cen_y + width/2;
  y_bottom = cen_y - width/2;
  
  InsertLine(component, x_left, y_top, x_right, y_top, layer, linewidth);
  InsertLine(component, x_left, y_bottom, x_right, y_bottom, layer, linewidth);
  InsertLine(component, x_left, y_top, x_left, y_bottom, layer, linewidth);
  InsertLine(component, x_right, y_top, x_right, y_bottom, layer, linewidth);
}

function InsertBox(component, id, cen_x, cen_y, bottom_z, height, length, width, layer, boardside, color) {
  // Define some useful coordinates.
  x_left = MMsToCoord(cen_x - length/2);
  x_right = MMsToCoord(cen_x + length/2);
  y_top = MMsToCoord(cen_y + width/2);
  y_bottom = MMsToCoord(cen_y - width/2);

  // Use those coordinate to create points.
  contour = PCBServer.PCBContourFactory;
  contour.AddPoint(x_left, y_top);
  contour.AddPoint(x_right, y_top);
  contour.AddPoint(x_right, y_bottom);
  contour.AddPoint(x_left, y_bottom);

  // Populate a body from those points.
  body = PCBServer.PCBObjectFactory(eComponentBodyObject, eNoDimension, eCreate_Default);
  body.SetState_Identifier(id);
  body.SetOutlineContour(contour);
  body.SetOverallHeight(MMsToCoord(bottom_z) + MMsToCoord(height));
  body.SetStandoffHeight(MMsToCoord(bottom_z));
  body.SetBodyProjection(boardside);
  body.SetBodyColor3D(color); 
  body.Layer = layer;
  
  // Stick that body into a part.
  component.AddPCBObject(body);
  PCBServer.SendMessageToRobots(component.I_ObjectAddress, c_Broadcast, PCBM_BoardRegisteration, body.I_ObjectAddress);
}

function AddCapFootprint(pkg, thickness) {
  AddPassiveFootprint(pkg, thickness, 26265, 13684944)
}

function AddResFootprint(pkg, thickness) {
  AddPassiveFootprint(pkg, thickness, 0, 13684944)
}

function AddPassiveFootprint(pkg, thickness, color_body, color_terminal) {
    // Create an empty component.
    package_name = pkg.package_code + "_" + thickness + "MM";
    component = PcbServer.CreatePCBLibComp();
    component.Name = package_name;
    CurrentLib.RegisterComponent(component);
    
    // This is a mystery.
    PcbServer.PreProcess();

    // Add the pads.
    for (pad_num = 1; pad_num <= 2; pad_num++) {
      NewPad = PcbServer.PCBObjectFactory(ePadObject, eNoDimension, eCreate_default);
      NewPad.Layer = eTopLayer;
      NewPad.TopShape = eRectangular;
      NewPad.TopXSize = MMsToCoord(pkg.dim_c);
      NewPad.TopYSize = MMsToCoord(pkg.dim_d);
      pad_pitch = pkg.dim_a - pkg.dim_c;
      NewPad.X = MMsToCoord((pad_num == 1) ? (-1 * pad_pitch / 2) : (pad_pitch / 2));
      NewPad.Y = 0;
      NewPad.Name = pad_num;
      NewPad.HoleSize = 0;
      component.AddPCBObject(NewPad);
      PcbServer.SendMessageToRobots(component.I_ObjectAddress,c_Broadcast,PCBM_BoardRegisteration,NewPad.I_ObjectAddress);
  }

  // Add the silkscreen.
  fill = PCBServer.PCBObjectFactory(eFillObject, eNoDimension, eCreate_Default);
  silkheight = (pkg.dim_d + pkg.dim_g)/2;
  fill.X1Location = MMsToCoord(-0.05);
  fill.Y1Location = MMsToCoord(silkheight/2);
  fill.X2Location = MMsToCoord(0.05);
  fill.Y2Location = MMsToCoord(-1*silkheight/2);
  fill.Layer = eTopOverlay;
  component.AddPCBObject(fill);
  PcbServer.SendMessageToRobots(component.I_ObjectAddress, c_Broadcast, PCBM_BoardRegisteration, fill.I_ObjectAddress);

  // Add the courtyard.
  InsertRectangle(component, 0, 0, pkg.dim_f, pkg.dim_g, eMechanical15, 0.05);

  // Add the orientation marker.
  region = PCBServer.PCBObjectFactory(eRegionObject, eNoDimension, eCreate_Default);
  contour = PCBServer.PCBContourFactory;
  contour.AddPoint(MMsToCoord(-1*pkg.dim_f/2), MMsToCoord(pkg.dim_g/2));
  contour.AddPoint(MMsToCoord(-1*pkg.dim_f/2 + pkg.dim_g/2), MMsToCoord(pkg.dim_g/2));
  contour.AddPoint(MMsToCoord(-1*pkg.dim_f/2), 0);
  region.SetOutlineContour(contour)
  region.Layer = eMechanical15;
  component.AddPCBObject(region);
  PcbServer.SendMessageToRobots(component.I_ObjectAddress, c_Broadcast, PCBM_BoardRegisteration, region.I_ObjectAddress);

  // Add the body outline.
  InsertRectangle(component, 0, 0, pkg.bdy_l, pkg.bdy_w, eMechanical13, 0.05);

  // Add the body.
  InsertBox(component, "body", 0, 0, 0, thickness, pkg.bdy_l - (2*pkg.trm_w), pkg.bdy_w, eMechanical13, eBoardSide_Top, color_body);
  InsertBox(component, "term_left", (pkg.bdy_l - pkg.trm_w)/2, 0, 0, thickness, pkg.trm_w, pkg.bdy_w, eMechanical13,  eBoardSide_Top, color_terminal);
  InsertBox(component, "term_right", -1*(pkg.bdy_l - pkg.trm_w)/2, 0, 0, thickness, pkg.trm_w, pkg.bdy_w, eMechanical13, eBoardSide_Top, color_terminal);

  // Add the designator text.
  designator = PCBServer.PCBObjectFactory(eTextObject, eNoDimension, eCreate_Default);
  designator.Layer = eMechanical16;
  designator.Text = '.Designator';
  designator.Size = MMsToCoord(0.8*pkg.dim_c);
  designator.XLocation = MMsToCoord(-0.8*pkg.dim_f/2);
  designator.YLocation = -1*designator.Size/2;
  designator.Width = designator.Size/5;
  component.AddPCBObject(designator);
  PcbServer.SendMessageToRobots(component.I_ObjectAddress, c_Broadcast, PCBM_BoardRegisteration, designator.I_ObjectAddress); 
    
  // More mysteries.
  PcbServer.SendMessageToRobots(CurrentLib.Board.I_ObjectAddress,c_Broadcast,PCBM_BoardRegisteration,component.I_ObjectAddress);
  PcbServer.PostProcess();

  // Change the viewport to the current part. This is probably dumb.
  CurrentLib.CurrentComponent = component;
  CurrentLib.Board.ViewManager_FullUpdate;

  return;
}

function CheckEnv() {
  // Ensure that the PCB tool is open.
  if (PcbServer == null) {
      Showmessage("PCB tool is not open.")
      return false;
  }
  // Ensure that a PCB library is open.
  CurrentLib = PcbServer.GetCurrentPCBLibrary();
  if (CurrentLib == null) {
      Showmessage("No footprint library is open.")
      return false;
  }
  return true;
}

function MakeCapacitors() {
  // Ensure our environment is sound.
  if(!CheckEnv()) {
    return;
  }
  // Loop over all defined capacitor packages and thicknesses and create them.
  for (a = 0; a < cap_packages.length; a++) {
    for (b = 0; b < cap_packages[a].thicknesses.length; b++) {
      AddCapFootprint(cap_packages[a], cap_packages[a].thicknesses[b]);
    }
  }
}

function MakeResistors() {
  // Ensure our environment is sound.
  if(!CheckEnv()) {
    return;
  }
  // Loop over all defined resistor packages and thicknesses and create them.
  for (a = 0; a < res_packages.length; a++) {
    for (b = 0; b < res_packages[a].thicknesses.length; b++) {
      AddResFootprint(res_packages[a], res_packages[a].thicknesses[b]);
    }
  }
}

function MakePassives() {
  MakeCapacitors();
  MakeResistors();
}
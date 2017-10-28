void setup() {
  pinMode(12,INPUT);
  Serial.begin(9600);
  
  

}

void loop() {
  int a;
  a=digitalRead(12);
  Serial.println(a);
  delay(1000);
  
  // put your main code here, to run repeatedly:

}

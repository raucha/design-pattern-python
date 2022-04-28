# 19_State pattern

## class

```mermaid
classDiagram

class Builder{
  <<interface>>
  +add_separator() None
  +add_data() None
  +get_result() str
}

Builder <|-- DollSeparatedCommandBuilder
class DollSeparatedCommandBuilder{
  -str text
  +add_separator() None
  +add_data() None
  +get_result() str
}

Builder <|-- SharpSeparatedCommandBuilder
class SharpSeparatedCommandBuilder{
  -str text
  +add_separator() None
  +add_data() None
  +get_result() str
}

Director o-- Builder
class Director{
  -Builder command_builder
}


```

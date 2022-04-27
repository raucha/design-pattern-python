
class StatePatternRobot():
    def __init__(self) -> None:
        self.__state = None

    def change_state(self, new_state):
        self.__state = new_state

    def get_light_pattern(self, ):
        return self.__state.get_light_pattern()

    def get_display_msgs(self, ):
        return self.__state.get_display_msgs()



# from State import State
from . import State


class StatePatternRobot():
    def __init__(self) -> None:
        self.__state: State = None

    def change_state(self, new_state: State) -> None:
        self.__state = new_state

    def get_light_pattern(self, ) -> None:
        return self.__state.get_light_pattern()

    def get_display_msgs(self, ) -> None:
        return self.__state.get_display_msgs()



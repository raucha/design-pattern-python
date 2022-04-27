import abc


class State():
    __metaclass__ = abc.ABCMeta

    # @classmethod
    @abc.abstractmethod
    def get_light_pattern(self) -> str:
        raise NotImplementedError()

    # @classmethod
    @abc.abstractmethod
    def get_display_msgs(self) -> str:
        raise NotImplementedError()


class RunningState(State):
    def get_light_pattern(self):
        return "green"

    def get_display_msgs(self):
        return "Now Running"


class IdleState(State):
    def get_light_pattern(self):
        return "black black"

    def get_display_msgs(self):
        return "Now Idle"


class ErrorState(State):
    def get_light_pattern(self):
        return "Red Red"

    def get_display_msgs(self):
        return "Now In Error"

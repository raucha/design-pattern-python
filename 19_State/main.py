from classdef.State import ErrorState, IdleState, RunningState
from classdef.StatePatternRobot import StatePatternRobot

print("hello world")

robot_context = StatePatternRobot()

states = [ErrorState(), IdleState(), RunningState()]

for s in states:
    print("============")
    print(s)
    robot_context.change_state(s)
    print("msg: {}".format(robot_context.get_display_msgs()))
    print(f"light pattern: {format(robot_context.get_light_pattern())}")
    print("============")
    print("")

robot_context.change_state(None)
robot_context.change_state("test")

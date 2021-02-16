import React from 'react';
import { MultiSelect, ItemRenderer } from '@blueprintjs/select';
import { SkillModel } from 'App/models';
import { MenuItem, Button } from '@blueprintjs/core';

interface IProps {
  disabled: boolean;
  items: SkillModel[];
  skills: SkillModel[];
  className: string;
  selectSkill: any;
}

export interface IState {
  fill: boolean;
  skills: SkillModel[];
  items: SkillModel[];
}

const SkillMultiSelect = MultiSelect.ofType<SkillModel>();

export class RenderSkillMultiSelect extends React.PureComponent<IProps, IState> {
  public state: IState = {
    fill: false,
    skills: this.props.skills,
    items: this.props.items
  };

  public render() {
    const { skills } = this.state;

    const clearButton =
      skills.length > 0 ? (
        <Button icon="cross" minimal={true} onClick={this.handleClear} />
      ) : (
        undefined
      );

    return (
      <div>
        <SkillMultiSelect
          activeItem={null}
          fill={false}
          itemRenderer={this.renderSkill}
          items={this.state.items}
          onItemSelect={this.handleSkillSelect}
          tagRenderer={this.renderTag}
          placeholder={'Поиск...'}
          tagInputProps={{
            onRemove: this.handleTagRemove as any,
            rightElement: clearButton
          }}
		  selectedItems={this.state.skills}
		  className={'employees__body-additional-panel--multiSelect'}
        />
      </div>
    );
  }

  private renderTag = (skill: SkillModel) => skill.title;

  private renderSkill: ItemRenderer<SkillModel> = (skill, { modifiers, handleClick }) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        icon={this.isSkillSelected(skill) ? 'tick' : 'blank'}
        key={skill.id}
        onClick={handleClick}
        text={`${skill.title}`}
        shouldDismissPopover={false}
      />
    );
  };

  private handleTagRemove = (_tag: string, index: number) => {
    this.deselectSkill(index);
  };

  private getSelectedSkillIndex(skill: SkillModel) {
    return this.state.skills.indexOf(skill);
  }

  private isSkillSelected(skill: SkillModel) {
    return this.getSelectedSkillIndex(skill) !== -1;
  }

  private selectSkill(skill: SkillModel) {
    this.selectSkills([skill]);
  }

  private arrayContainsSkill(skills: SkillModel[], skillToFind: SkillModel): boolean {
    return skills.some((skill: SkillModel) => skill.title === skillToFind.title);
  }

  private selectSkills(skillsToSelect: SkillModel[]) {
    if (!this.props.disabled) {
      const { skills, items } = this.state;

      let nextSkill = skills.slice();
      let nextItems = items.slice();
      skillsToSelect.forEach((skill) => {
        nextSkill = !this.arrayContainsSkill(nextSkill, skill) ? [...nextSkill, skill] : nextSkill;
      });
      this.props.selectSkill(nextSkill);
      this.setState({
        items: nextItems,
        skills: nextSkill
      });
    }
  }

  private deselectSkill(index: number) {
    this.props.selectSkill(this.state.skills.filter((_skill, i) => i !== index));
    this.setState({
      skills: this.state.skills.filter((_skill, i) => i !== index)
    });
  }

  private handleSkillSelect = (skill: SkillModel) => {
    if (!this.isSkillSelected(skill)) {
      this.selectSkill(skill);
    } else {
      this.deselectSkill(this.getSelectedSkillIndex(skill));
    }
  };

  private handleClear = () => this.setState({ skills: [] });
}
